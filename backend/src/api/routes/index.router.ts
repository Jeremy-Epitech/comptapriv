import { Router } from 'express';
import { Routeur } from './routeur';
import { UserController } from '../controllers/user.controller';
import { TransactionsController } from '../controllers/transactions.controller';
import { TreasuryController } from '../controllers/treasury.controller';
const router = Router();


//#region User 
const userRoutes = new Routeur(new UserController());
userRoutes.getAll();
userRoutes.getOne();
userRoutes.create();
userRoutes.update();
userRoutes.delete();
//#endregion

//#region Transactions 
const transactionRoutes = new Routeur(new TransactionsController());
transactionRoutes.getAll();
transactionRoutes.getOne();
transactionRoutes.create();
transactionRoutes.delete();
//#endregion

//#region Treasury 
const treasuryRoutes = new Routeur(new TreasuryController());
treasuryRoutes.getAll();
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
