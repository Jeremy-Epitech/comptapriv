import express, { Express } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './routes/index.router';
dotenv.config();

class HttpServer {
  app: Express;
  isOpen: boolean;
  port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.isOpen = true;
    this.config();
  }

  config(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(router);
  }

  start(): void {
    this.app.listen(this.port, () => {
      // Set up logger for traceability
      console.info(`HTTP server running on port ${this.port}`);
    });
  }
}

export default HttpServer;
