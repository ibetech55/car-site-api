import { Response } from "express";
import { sign, verify } from "jsonwebtoken"
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRES } = process.env;

export interface ITokenPayload {
    iat?: number;
    exp?: number;
    id?: string;
}
export const generateAccessToken = (payload: ITokenPayload) => {
    const accessToken = sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES })
    return accessToken;
}

export const generateRefreshToken = (payload: ITokenPayload) => {
    const refreshToken = sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRES })
    return refreshToken;
}

export const verifyRefreshToken = (resfreshToken: string) => {
    const payload: ITokenPayload | string = verify(resfreshToken, REFRESH_TOKEN_SECRET)
    return payload;
}

export const storeRefreshToken = (refreshToken: string, res: Response) => {
    res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 10 * 1000,
    })
}

export const storeAccessToken = (accessToken: string, res: Response) => {
    res.cookie("access_token", accessToken, {
        httpOnly: true,
        maxAge: 20 * 1000,
    })
}

