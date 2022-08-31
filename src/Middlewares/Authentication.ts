import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import { AuthRepository } from "../Repositories/auth.repsoitory";
import { UserRepository } from "../Repositories/user.repository";
import { AccessDenied, Forbidden } from "../Utils/ResponseHandlers";
import { compareTokens } from "../Utils/TokenHandelers";

export const Authentication = async (req: Request, res: Response, next: NextFunction) => {
    const { access_token } = req.cookies;
    const { refresh_token } = req.cookies;

    if (!refresh_token) Forbidden('Unauthorized')

    if (access_token) {
        const authRepsitory = new AuthRepository();
        const auth = await authRepsitory.getAuthByToken(refresh_token)

        if (!auth) AccessDenied('Access Denied');

        const tokens = compareTokens(access_token, refresh_token);
        if (!tokens.compare) AccessDenied('Access Denied');

        const userRepository = new UserRepository();
        const user = await userRepository.getUserById(tokens.refreshToken.id)
        if (!user.active) AccessDenied('Access Denied');

        res.locals = { userId: tokens.refreshToken.id }
        next();
    } else {
        Forbidden('Unauthorized')
    }
}
