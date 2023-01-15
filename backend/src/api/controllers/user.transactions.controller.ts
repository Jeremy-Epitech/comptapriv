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

    getOne = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        response.status(404).send();
    };

    create = async (request: Request, response: Response): Promise<void> => {
        response.status(404).send();
    };


    update = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        response.status(404).send();
    };

    delete = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        response.status(404).send();
    };
}