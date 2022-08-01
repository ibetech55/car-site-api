import { Router, Request, Response } from 'express';
import ModelContainer from '../Containers/model.container'

const ModelRouter = Router();

ModelRouter
    .get("/", (req: Request, res: Response) => ModelContainer().getModels(req, res))
    .post("/", (req: Request, res: Response) => ModelContainer().createModel(req, res))
    .get("/:id", (req: Request, res: Response) => ModelContainer().getModel(req, res))
    .put("/:id", (req: Request, res: Response) => ModelContainer().update(req, res))
    .delete("/:id", (req: Request, res: Response) => ModelContainer().delete(req, res))

export { ModelRouter }
