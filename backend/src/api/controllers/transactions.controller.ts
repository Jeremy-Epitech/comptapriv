import { Transaction } from '../../database/entity/Transaction';
import { Router, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../config/data-source';
import { Controller } from './interface.controller';


export class TransactionController implements Controller {
    router: Router;
    // eslint-disable-next-line prettier/prettier
    private transactionRepository: Repository<Transaction>;

    constructor() {
        this.transactionRepository = AppDataSource.getRepository(Transaction);
        this.router = Router();
    }

    getAll = async (request: Request, response: Response): Promise<void> => {
        // const transactions: Transaction[] = await this.transactionRepository.find();
        // response.status(200).json(transactions);
        response.status(404).send();
    };

    getOne = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        // const transaction: Transaction | null = await this.transactionRepository.findOneBy({ id_tra: parseInt(request.params.id ?? 0) });
        // response.status(200).send(transaction);
        response.status(404).send();
    };

    create = async (request: Request, response: Response): Promise<void> => {
        try {
            // const transaction: Transaction = new Transaction(request.body.firstName, request.body.email);
            // transaction.lastName_tra = request.body.lastName;
            const transaction: Transaction = request.body;

            if (!transaction.user || !transaction.user.id_u)
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
                response.status(400).send(ex);

        }

    };

    //#region Update -> treasury not updated
    update = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        // const transaction: Transaction | null = await this.transactionRepository.findOneBy({ id_tra: parseInt(request.params.id ?? 0) });

        // if (transaction) {

        //     await this.transactionRepository.update(transaction.id_tra, transaction);
        //     response.status(200).send(transaction);
        // } else {
        //     response.status(400).send('Utilisateur non trouvé');
        // }
    };
    //#endregion

    delete = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        try {
            await this.transactionRepository.delete({ id_tra: parseInt(request.params.id ?? 0) });
            response.status(200);
        } catch (ex: any) {
            response.status(400).send(ex);

        }
    };
}