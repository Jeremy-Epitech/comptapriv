/* eslint-disable prettier/prettier */
import { Router, Request, Response } from 'express';

export interface Controller {
    router: Router;

    getAll(request: Request, response: Response): Promise<void>;

    getOne(request: Request<{ id: string }>, response: Response): Promise<void>;

    create(request: Request, response: Response): Promise<void>;

    update(request: Request<{ id: string }>, response: Response): Promise<void>;

    delete(request: Request<{ id: string }>, response: Response): Promise<void>;
}
