import { Router, Request, Response } from 'express';
import CarContainer from '../containers/car.container'

const CarRoutes = Router();

CarRoutes
  .get("/", (req: Request, res: Response) => CarContainer().getcars(req, res))
  .post("/", (req: Request, res: Response) => CarContainer().createCar(req, res))
  .get("/:id", (req: Request, res: Response) => CarContainer().getCar(req, res))
  .put("/:id", (req: Request, res: Response) => CarContainer().updateCar(req, res))
  .delete("/:id", (req: Request, res: Response) => CarContainer().deleteCar(req, res))

export { CarRoutes }
