import 'reflect-metadata';
import { AppDataSource } from '../src/data-source';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
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

    // sempre depois das rotas
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return res.status(400).json({
                error: err.message
             });
        }

        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });

        return next();
    });

    app.listen(port, () => {
        console.log(`listening on ${port}`);
    });
})
.catch((err) => {
    console.log(`error: ${err}`);
});
