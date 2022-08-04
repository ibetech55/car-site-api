import { Router, Request, Response } from 'express';
import UserContainer from '../Containers/user.contaner'
import { Authentication } from '../Middlewares/Authentication';

const UserRouter = Router();

UserRouter
    .get("/", (req: Request, res: Response) => UserContainer().getUsers(req, res))
    .post("/", (req: Request, res: Response) => UserContainer().createUser(req, res))
    .get("/:id", (req: Request, res: Response) => UserContainer().getUser(req, res))
    .put("/:id", (req: Request, res: Response) => UserContainer().updateUser(req, res))
    .delete("/:id", (req: Request, res: Response) => UserContainer().deleteUser(req, res))

export { UserRouter }
