import { Router } from 'express';
import { UserRouteur } from './user.routeur';
import { UserController } from '../controllers/user.controller';
import { TransactionController } from '../controllers/transactions.controller';
import { TreasuryController } from '../controllers/treasury.controller';
import { TransactionRouteur } from './transactions.routeur';
import { TreasuryRouteur } from './treasury.routeur';
import { UserTreasuryController } from '../controllers/user.treasury.controller';
import { UserTransactionController } from '../controllers/user.transactions.controller';
const router = Router();


//#region User 
const userRoutes = new UserRouteur(new UserController(), new UserTreasuryController(), new UserTransactionController());
userRoutes.getAll();
userRoutes.getOne();
userRoutes.create();
userRoutes.update();
userRoutes.delete();

userRoutes.getAllTransaction();
userRoutes.createOneTransaction();
userRoutes.updateOneTransaction();
userRoutes.deleteOneTransaction();

userRoutes.getAllTreasury();
userRoutes.createOneTreasury();
userRoutes.updateOneTreasury();
userRoutes.deleteOneTreasury();
//#endregion

//#region Transaction 
const transactionRoutes = new TransactionRouteur(new TransactionController());
// transactionRoutes.getAll();
transactionRoutes.getOne();
transactionRoutes.create();
transactionRoutes.delete();
//#endregion

//#region Treasury 
const treasuryRoutes = new TreasuryRouteur(new TreasuryController());
// treasuryRoutes.getAll();
treasuryRoutes.getOne();
treasuryRoutes.create();
treasuryRoutes.delete();
//#endregion

router.use('/users', userRoutes.router);
router.use('/transactions', transactionRoutes.router);
router.use('/treasury', treasuryRoutes.router);

router.get('/ping', (request, response) => {
  console.log('[HttpServer] Get /ping request');
  return response.status(200).json({ data: 'Pong !' });
});

export default router;
