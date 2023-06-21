import 'reflect-metadata';
import { AppDataSource } from '../src/data-source';
import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

import '../src/data-source';

AppDataSource.initialize().then(() => {
    
    console.log('Database online');

    dotenv.config();

    const port = process.env.PORT;

    const app = express();

    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
        console.log(`listening on ${port}`);
    });
})
.catch((err) => {
    console.log(`error: ${err}`);
});
