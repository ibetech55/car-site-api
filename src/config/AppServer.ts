import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan'
import { AppError } from '../errors/AppError';
import { Authorization } from '../middlewares/Authorization';
import { router } from '../routes';

class AppServer {
  public server;
  constructor() {
    this.server = express()
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(morgan(`Method::method :url :status :res[content-length] - :response-time ms`))
  }
  routes() {
    this.server.use('/v1/api', Authorization, router)
  }

  errorHandler() {
    this.server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message })
      }
      return res.status(500).json({ message: `Internal Server Error ${err.message}` })
    })
  }
}

export default new AppServer().server
