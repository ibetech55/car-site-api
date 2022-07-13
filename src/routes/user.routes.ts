import { Router, Request, Response } from 'express';
import UserContainer from '../containers/users'

const UserRoutes = Router();

UserRoutes
  .get("/", (req: Request, res: Response) => UserContainer().getUsers(req, res))
  .post("/", (req: Request, res: Response) => UserContainer().createUser(req, res));

export { UserRoutes }
