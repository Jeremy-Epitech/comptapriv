import { Treasury } from '../../database/entity/Treasury';
import { Router, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../config/data-source';
import { Controller } from './interface.controller';


export class UserTreasuryController implements Controller {
    router: Router;
    // eslint-disable-next-line prettier/prettier
    private treasuryRepository: Repository<Treasury>;

    constructor() {
        this.treasuryRepository = AppDataSource.getRepository(Treasury);
        this.router = Router();
    }

    getAll = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        const treasurys: Treasury[] = await this.treasuryRepository.find({ where: { user: { id_u: parseInt(request.params.id ?? 0) } } });
        response.status(200).json(treasurys);
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