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

    getAll = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        const treasurys: Treasury[] = await this.treasuryRepository.find({ where: { user: { id_u: parseInt(request.params.id ?? 0) } } });
        response.status(200).json(treasurys);
    };

    getOne = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        const treasury: Treasury | null = await this.treasuryRepository.findOneBy({ id_tre: parseInt(request.params.id ?? 0) });

        if (treasury === null)
            response.status(404).send();
        else
            response.status(200).send(treasury);
    };

    create = async (request: Request, response: Response): Promise<void> => {
        try {
            const treasury: Treasury = request.body;

            if (!treasury.user || !treasury.user.id_u)
                throw new Error('Aucun utilisateur n\'est renseigné')

            const treasury2: Treasury = await this.treasuryRepository.save(treasury);
            console.log(treasury2);

            response.status(200).send(treasury2);
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
        response.status(404).send();
    };
    //#endregion

    delete = async (request: Request<{ id: string }>, response: Response): Promise<void> => {
        try {
            await this.treasuryRepository.delete({ id_tre: parseInt(request.params.id ?? 0) });
            response.status(200);
        } catch (ex: any) {
            response.status(400).send(ex);

        }
    };
}