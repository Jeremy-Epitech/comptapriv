import { Transaction } from '../../database/entity/Transaction';
import { Router, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../config/data-source';
import { Controller } from './interface.controller';


export class UserTransactionController implements Controller {
    router: Router;
    // eslint-disable-next-line prettier/prettier
    private transactionRepository: Repository<Transaction>;

    constructor() {
        this.transactionRepository = AppDataSource.getRepository(Transaction);
        this.router = Router();
    }

    getAll = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        const transactions: Transaction[] = await this.transactionRepository.find({ where: { user: { id_u: parseInt(request.params.id ?? 0) } } });
        response.status(200).json(transactions);
    };

    getOne = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        const transactions: Transaction[] | null = await this.transactionRepository.findBy({
            user: { id_u: parseInt(request.params.id ?? 0) },
            id_tra: parseInt(request.params.id ?? 0)
        });
        const transaction: Transaction | null = transactions.at(0) || null;

        if (transaction === null || transaction === undefined)
            response.status(404).send();
        else
            response.status(200).send(transaction);
    };

    create = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        try {
            const transaction: Transaction = request.body;

            if (!transaction.user || !transaction.user.id_u || parseInt(request.params.id) !== transaction.user.id_u)
                throw new Error('Aucun utilisateur n\'est renseigné')

            const transaction2: Transaction = await this.transactionRepository.save(transaction);
            console.log(transaction2);

            response.status(200).send(transaction2);
        } catch (ex: any) {
            console.log(ex);
            if (ex?.sqlMessage)
                response.status(400).send(ex?.sqlMessage);
            else if (ex?.message)
                response.status(400).send(ex?.message);
            else
                response.status(400).send(ex.message);

        }
    };


    update = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        response.status(404).send();
    };

    delete = async (request: Request<{ id: string, id_tra: string }>, response: Response): Promise<void> => {
        try {
            if (!request.params.id_tra || parseInt(request.params.id_tra) <= 0)
                throw new Error(`La transaction n'a pas été trouvé`)

            await this.transactionRepository.delete({ id_tra: parseInt(request.params.id_tra) });
            response.status(200);
        } catch (ex: any) {
            response.status(400).send(ex);
        }
    };
}