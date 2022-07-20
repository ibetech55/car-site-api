import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import { AppError } from '../ErrorHandler/AppError';
import { Authorization } from '../Middlewares/Authorization';
import { router } from '../Routes';
import cors from 'cors'
class AppServer {
    public server;
    constructor() {
        this.server = express()
        this.middlewares();
        this.routes();
        this.errorHandler();
    }

    middlewares() {
        this.server.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
            );
            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, PATCH, DELETE, OPTIONS"
            );
            next();
        });
        this.server.use(express.json())
        this.server.use(cookieParser())
        this.server.use(cors({ origin: "http://localhost:3000", credentials: true }))
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