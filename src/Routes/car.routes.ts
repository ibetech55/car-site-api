import { Router, Request, Response } from 'express';
import CarContainer from '../Containers/car.container'
import { Authentication } from '../Middlewares/Authentication';

const CarRouter = Router();

CarRouter
    .get("/", Authentication, (req: Request, res: Response) => CarContainer().getcars(req, res))
    .post("/", (req: Request, res: Response) => CarContainer().createCar(req, res))
    .get("/:id", (req: Request, res: Response) => CarContainer().getCar(req, res))
    .put("/:id", (req: Request, res: Response) => CarContainer().updateCar(req, res))
    .delete("/:id", (req: Request, res: Response) => CarContainer().deleteCar(req, res))

export { CarRouter }
