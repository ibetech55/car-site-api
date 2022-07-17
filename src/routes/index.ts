import { Router } from 'express';
import { CarRoutes } from './car.routes';
import { UserRoutes } from './user.routes';

const router = Router();

router.use("/users", UserRoutes);
router.use("/cars", CarRoutes);

export { router }
