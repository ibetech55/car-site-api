import { Router } from 'express';
import { AuthRouter } from './auth.routes';
import { CarRouter } from './car.routes';
import { UserRouter } from './user.routes';

const router = Router();

router.use("/users", UserRouter);
router.use("/cars", CarRouter);
router.use("/auth", AuthRouter);

export { router }
