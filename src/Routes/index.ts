import { Router } from 'express';
import { CarRouter } from './car.routes';
import { UserRouter } from './user.routes';

const router = Router();

router.use("/users", UserRouter);
router.use("/cars", CarRouter);

export { router }
