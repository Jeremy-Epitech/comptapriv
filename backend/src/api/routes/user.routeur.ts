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
}
