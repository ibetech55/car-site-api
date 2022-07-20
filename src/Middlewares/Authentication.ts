import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import { AuthRepository } from "../Repositories/auth.repsoitory";
import { AccessDenied, Forbidden } from "../Utils/ResponseHandlers";

export const Authentication = async (req: Request, res: Response, next: NextFunction) => {
    const { access_token } = req.cookies;
    const { refresh_token } = req.cookies;
    let decodedAccessToken, decodedRefreshToken;

    if (!refresh_token) Forbidden('Unauthorized')

    if (access_token) {
        const authRepsitory = new AuthRepository();
        const auth = await authRepsitory.getAuthByToken(refresh_token)

        if (!auth) AccessDenied('Access Denied');

        decodedRefreshToken = decode(refresh_token)
        decodedAccessToken = decode(access_token)
        if (decodedRefreshToken.id !== decodedAccessToken.id) AccessDenied('Access Denied');

        res.locals = { userId: decodedRefreshToken.id }
        next();
    } else {
        Forbidden('Unauthorized')
    }
}
