import { Router } from 'express';
import { AuthRouter } from './auth.routes';
import { BrandRouter } from './brand.routes';
import { CarRouter } from './car.routes';
import { ModelRouter } from './model.routes';
import { UserRouter } from './user.routes';

const router = Router();

router.use("/users", UserRouter);
router.use("/cars", CarRouter);
router.use("/auth", AuthRouter);
router.use("/brands", BrandRouter);
router.use("/models", ModelRouter);

export { router }
