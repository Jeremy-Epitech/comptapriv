import { Controller } from '../controllers/interface.controller';
import { Routeur } from './routeur';

export class UserRouteur extends Routeur {
  userTreasuryController: Controller
  userTransactionsController: Controller

  constructor(controller: Controller, userTreasuryController: Controller, userTransactionsController: Controller) {
    super(controller)
    this.userTreasuryController = userTreasuryController;
    this.userTransactionsController = userTransactionsController;
  }

  getAllTreasury(): void {
    this.router.get('/:id/treasury', this.userTreasuryController.getAll);
  }

  getAllTransactions(): void {
    this.router.get('/:id/transactions', this.userTransactionsController.getAll);
  }

  getOneTransactions(): void {
    this.router.get('/:id/transactions/:id_tra', this.userTransactionsController.getOne);
  }

  getOneTreasury(): void {
    this.router.get('/:id/treasury/:id_tre', this.userTransactionsController.getOne);
  }

  createOneTransactions(): void {
    this.router.post('/:id/transactions/', this.userTransactionsController.create);
  }

  createOneTreasury(): void {
    this.router.post('/:id/treasury', this.userTransactionsController.create);
  }

  updateOneTransactions(): void {
    this.router.put('/:id/transactions/:id_tra', this.userTransactionsController.update);
  }

  updateOneTreasury(): void {
    this.router.put('/:id/treasury/:id_tre', this.userTransactionsController.update);
  }

  deleteOneTransactions(): void {
    this.router.delete('/:id/transactions/:id_tra', this.userTransactionsController.delete);
  }

  deleteOneTreasury(): void {
    this.router.delete('/:id/treasury/:id_tre', this.userTransactionsController.delete);
  }
}
