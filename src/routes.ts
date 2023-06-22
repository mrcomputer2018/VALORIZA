import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController= new AuthenticateUserController;

// users
router.post('/users', createUserController.handle);
//criando token
router.post('/login', authenticateUserController.handle);
// Tags
router.post('/tags', ensureAdmin, createTagController.handle);

export { router };
