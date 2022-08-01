import { Router, Request, Response } from 'express';
import BrandContainer from '../Containers/brand.container'
import { Authentication } from '../Middlewares/Authentication';

const BrandRouter = Router();

BrandRouter
    .get("/", (req: Request, res: Response) => BrandContainer().getBrands(req, res))
    .post("/", (req: Request, res: Response) => BrandContainer().createBrand(req, res))
    .get("/:id", (req: Request, res: Response) => BrandContainer().getBrand(req, res))
    .put("/:id", (req: Request, res: Response) => BrandContainer().update(req, res))
    .delete("/:id", (req: Request, res: Response) => BrandContainer().delete(req, res))

export { BrandRouter }
