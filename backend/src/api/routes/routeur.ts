import { Router } from 'express';
import { Controller } from '../controllers/interface.controller';

export class Routeur {
  controller: Controller;
  router: Router;

  constructor(controller: Controller) {
    this.router = Router();
    this.controller = controller;
  }

  getAll(): void {
    this.router.get('/', this.controller.getAll);
  }

  getOne(): void {
    this.router.get('/:id', this.controller.getOne);
  }

  create(): void {
    this.router.post('/', this.controller.create);
  }

  update(): void {
    this.router.put('/:id', this.controller.update);
  }

  delete(): void {
    this.router.delete('/:id', this.controller.delete);
  }

}
