import { Router } from 'express';
import { Routeur } from './routes/routes';
import { UserController } from './controllers/user.controller';
const router = Router();

const userRoot = new Routeur(new UserController());

router.use('/users', userRoot.router);

router.get('/ping', (request, response) => {
  console.log('[HttpServer] Get /ping request');
  return response.status(200).json({ data: 'Pong !' });
});

export default router;
