import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

import '../src/data-source';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
