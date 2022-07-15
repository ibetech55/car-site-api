import { Router, Request, Response } from 'express';
import UserContainer from '../containers/users'

const UserRoutes = Router();

UserRoutes
  .get("/", (req: Request, res: Response) => UserContainer().getUsers(req, res))
  .post("/", (req: Request, res: Response) => UserContainer().createUser(req, res))
  .get("/:id", (req: Request, res: Response) => UserContainer().getUser(req, res))
  .put("/:id", (req: Request, res: Response) => UserContainer().updateUser(req, res))
  .delete("/:id", (req: Request, res: Response) => UserContainer().deleteUser(req, res))

export { UserRoutes }
