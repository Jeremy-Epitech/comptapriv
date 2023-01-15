import { Controller } from '../controllers/interface.controller';
import { Routeur } from './routeur';

export class TreasuryRouteur extends Routeur {
  constructor(controller: Controller) {
    super(controller)
  }
}