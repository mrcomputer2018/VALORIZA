import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "valorizadb",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Database online');
    })
    .catch((error) => console.log(error))