import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import 'express-async-errors';

import RouterFactory from "@infra/http/RouterFactory";
import HttpServer from "@infra/http/HttpServer";

export default class ExpressAdapter implements HttpServer {
  readonly app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());

    const routerFactory = new RouterFactory();

    this.app.use('/api', routerFactory.register());

    this.app.use('/api', (req, res) => {
      res.json({ message: 'API route My Secret!' });
    });
  }
  
  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running at port $${port}`);
    });
  }
}
