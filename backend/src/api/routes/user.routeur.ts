import { Controller } from '../controllers/interface.controller';
import { Routeur } from './routeur';

export class UserRouteur extends Routeur {
  userTreasuryController: Controller
  userTransactionController: Controller

  constructor(controller: Controller, userTreasuryController: Controller, userTransactionController: Controller) {
    super(controller)
    this.userTreasuryController = userTreasuryController;
    this.userTransactionController = userTransactionController;
  }

  getAllTreasury(): void {
    this.router.get('/:id/treasury', this.userTreasuryController.getAll);
  }

  getAllTransaction(): void {
    this.router.get('/:id/transactions', this.userTransactionController.getAll);
  }

  getOneTransaction(): void {
    this.router.get('/:id/transactions/:id_tra', this.userTransactionController.getOne);
  }

  getOneTreasury(): void {
    this.router.get('/:id/treasury/:id_tre', this.userTransactionController.getOne);
  }

  createOneTransaction(): void {
    this.router.post('/:id/transactions/', this.userTransactionController.create);
  }

  createOneTreasury(): void {
    this.router.post('/:id/treasury', this.userTransactionController.create);
  }

  updateOneTransaction(): void {
    this.router.put('/:id/transactions/:id_tra', this.userTransactionController.update);
  }

  updateOneTreasury(): void {
    this.router.put('/:id/treasury/:id_tre', this.userTransactionController.update);
  }

  deleteOneTransaction(): void {
    this.router.delete('/:id/transactions/:id_tra', this.userTransactionController.delete);
  }

  deleteOneTreasury(): void {
    this.router.delete('/:id/treasury/:id_tre', this.userTransactionController.delete);
  }
}
