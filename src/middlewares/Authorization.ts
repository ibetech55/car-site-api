import { Request, Response, NextFunction } from "express";
import { AccessDenied } from "../utils/ResponseHandlers";

export const Authorization = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.API_KEY === req.headers.api_key) {
    next();
  } else {
    AccessDenied('Access Denied');
  }
}
