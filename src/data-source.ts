import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "valorizadb.sqlite",
    synchronize: true,
    logging: true,
    entities: [`${__dirname}/**/entities/*.{ts, js}`],
    subscribers: [/*...*/],
    migrations: ["src/migration/*.js"],
    migrationsTableName: "custom_migration_table",
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Database online');
    })
    .catch((error) => console.log(error))
