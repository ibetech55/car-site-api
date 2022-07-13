import { Router, Request, Response } from 'express';
import UserContainer from '../containers/users'

const UserRoutes = Router();

UserRoutes
  .get("/", (req: Request, res: Response, next) => UserContainer().getUsers(req, res, next))
  .post("/", (req: Request, res: Response) => UserContainer().createUser(req, res));

export { UserRoutes }
