import { Transactions } from '../../database/entity/Transactions';
import { Router, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../config/data-source';
import { Controller } from './interface.controller';


export class UserTransactionsController implements Controller {
    router: Router;
    // eslint-disable-next-line prettier/prettier
    private transactionsRepository: Repository<Transactions>;

    constructor() {
        this.transactionsRepository = AppDataSource.getRepository(Transactions);
        this.router = Router();
    }

    getAll = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        const transactionss: Transactions[] = await this.transactionsRepository.find({ where: { user: { id_u: parseInt(request.params.id ?? 0) } } });
        response.status(200).json(transactionss);
    };

    getOne = async (request: Request<{ id: string, id_tra: string }>, response: Response): Promise<void> => {
        response.status(404).send();
    };

    create = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        try {
            // const transaction: Transactions = new Transactions(request.body.firstName, request.body.email);
            // transaction.lastName_tra = request.body.lastName;
            const transaction: Transactions = request.body;

            if (!transaction.user || !transaction.user.id_u && parseInt(request.params.id) !== transaction.user.id_u)
                throw new Error('Aucun utilisateur n\'est renseigné')

            const transaction2: Transactions = await this.transactionsRepository.save(transaction);
            console.log(transaction2);

            response.status(200).send(transaction2);
        } catch (ex: any) {
            console.log(ex);
            if (ex?.sqlMessage)
                response.status(400).send(ex?.sqlMessage);
            else if (ex?.message)
                response.status(400).send(ex?.message);
            else
                response.status(400).send(ex);

        }
    };


    update = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        response.status(404).send();
    };

    delete = async (request: Request<{ id: string, id_tra: string }>, response: Response): Promise<void> => {
        try {
            await this.transactionsRepository.delete({ id_tra: parseInt(request.params.id_tra ?? 0) });
            response.status(200);
        } catch (ex: any) {
            response.status(400).send(ex);

        }
    };
}