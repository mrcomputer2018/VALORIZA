import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

// users
router.post('/users', createUserController.handle);

// Tags
router.post('/tags', createTagController.handle);

export { router };
