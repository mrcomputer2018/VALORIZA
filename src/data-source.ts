import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Tag } from './entity/Tag';
import dotenv from 'dotenv';
import { Compliment } from './entity/Compliment';

dotenv.config();

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username:  process.env.DB_USERNAME,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_DATABASE,
    entities: [User, Tag, Compliment],
    migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
})
