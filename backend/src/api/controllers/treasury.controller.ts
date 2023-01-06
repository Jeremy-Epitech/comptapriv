import { Treasury } from '../../database/entity/Treasury';
import { Router, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../config/data-source';
import { Controller } from './interface.controller';


export class TreasuryController implements Controller {
    router: Router;
    // eslint-disable-next-line prettier/prettier
    private treasuryRepository: Repository<Treasury>;

    constructor() {
        this.treasuryRepository = AppDataSource.getRepository(Treasury);
        this.router = Router();
    }

    getAll = async (request: Request, response: Response): Promise<void> => {
        const treasurys: Treasury[] = await this.treasuryRepository.find();
        console.log(treasurys);
        response.status(200).json(treasurys);
    };

    getOne = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        console.log('la');
        const treasury: Treasury | null = await this.treasuryRepository.findOneBy({ id_tre: parseInt(request.params.id ?? 0) });
        response.status(200).send(treasury);
    };

    create = async (request: Request, response: Response): Promise<void> => {
        try {
            // const treasury: Treasury = new Treasury(request.body.firstName, request.body.email);
            const treasury: Treasury = request.body;
            // treasury.lastName_tre = request.body.lastName;
            // treasury.password_tre = request.body.password;

            const treasury2: Treasury = await this.treasuryRepository.save(treasury);
            console.log(treasury2);

            response.status(200).send(treasury2);
        } catch (ex: any) {
            console.log(ex);
            if (ex?.code === 'ER_DUP_ENTRY')
                response.status(400).send('Email déjà enregistré');
            else if (ex?.code === 'ER_NO_DEFAULT_FOR_FIELD')
                response.status(400).send(ex.sqlMessage);
            else
                response.status(400).send(ex?.sqlMessage);

        }

    };

    update = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        const treasury: Treasury | null = await this.treasuryRepository.findOneBy({ id_tre: parseInt(request.params.id ?? 0) });

        if (treasury) {
            treasury.amount_tre = request.body.amount_tre;
            treasury.date_tre = request.body?.date_tre;


            treasury.user = request.body.user;
            await this.treasuryRepository.update(treasury.id_tre, treasury);
            response.status(200).send(treasury);
        } else {
            response.status(400).send('Utilisateur non trouvé');
        }
    };

    delete = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        try {
            await this.treasuryRepository.delete({ id_tre: parseInt(request.params.id ?? 0) });
            response.status(200);
        } catch (ex: any) {
            response.status(400).send(ex);

        }
    };
}