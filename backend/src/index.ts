// Import
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { AppDataSource } from './config/data-source';
import HttpServer from './api/http.server';
import { User } from './database/entity/User';

// To load easily the .env file
dotenv.config();

// Init variables
const httpPort: number = parseInt(process.env.HTTP_PORT ?? '3000');
const DBHost: string = process.env.MYSQL_DB ?? 'localhost';
const DBPort: number = parseInt(process.env.MYSQL_PORT ?? '3006');

// Initialize data source for typeOrm
AppDataSource.initialize()
    .then(async (response) => {
        const userRepo = await response.getRepository(User);
        await userRepo.find();
        console.log(`Connected to ${DBHost} database on port ${DBPort}`);
    })
    .catch((error: any) =>
        console.log(
            `Failed to connect to ${DBHost} database on port ${DBPort}:`,
            error?.message
        )
    );

// Start HTTP server
const http = new HttpServer(httpPort);
http.start();