import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();

// users
router.post('/users', createUserController.handle);

//criando token
router.post('/login', authenticateUserController.handle);

// Tags
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);

// compliments
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.get('/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get('/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle);

export { router };
