import { Request, Response } from "express";
import { IAuthService } from "../Services/Interfaces/IAuthService";
import { AccessDenied } from "../Utils/ResponseHandlers";
import { storeAccessToken, storeRefreshToken } from "../Utils/TokenHandelers";

class AuthController {
    constructor(private readonly AuthService: IAuthService) { }

    async Login(req: Request, res: Response) {
        const user = await this.AuthService.Login(req.body)
        let userData = { ...user };
        delete userData.refreshToken;
        delete userData.accessToken;

        storeAccessToken(user.accessToken, res)
        storeRefreshToken(user.refreshToken, res)

        res.status(200).json(userData)
    }

    async Refresh(req: Request, res: Response) {
        const data = await this.AuthService.Refresh(req.cookies['refresh_token'])

        if (data && data.accessToken) {
            storeAccessToken(data.accessToken, res)

            return res.status(200).send(true)
        } else {
            AccessDenied('Access Denied')
        }
    }
}

export { AuthController }
