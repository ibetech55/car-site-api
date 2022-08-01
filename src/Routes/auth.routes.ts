import { Router } from 'express'
import { AuthContainer } from '../Containers/auth.container';

const AuthRouter = Router();

AuthRouter.post('/', (req, res) => AuthContainer().Login(req, res))

AuthRouter.post('/refresh', (req, res) => AuthContainer().Refresh(req, res))

AuthRouter.put('/verify-account/:id', (req, res) => AuthContainer().VerifyAccount(req, res))

export { AuthRouter }
