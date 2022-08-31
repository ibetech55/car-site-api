import { Response } from "express";
import { sign, verify } from "jsonwebtoken"
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRES, ACCESS_TOKEN } = process.env;

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

export const verifyAccessToken = (accessToken: string) => {
    const payload: ITokenPayload | string = verify(accessToken, ACCESS_TOKEN_SECRET)
    return payload;
}

export const storeRefreshToken = (refreshToken: string, res: Response) => {
    res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 10,
    })
}

export const storeAccessToken = (accessToken: string, res: Response) => {
    res.cookie("access_token", accessToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 5,
    })
}

export const compareTokens = (accessToken: string, refreshToken: string) => {
    const verifiedRefreshToken = verifyRefreshToken(refreshToken) as ITokenPayload
    const verifiedAccessToken = verifyAccessToken(accessToken) as ITokenPayload

    return {
        compare: verifiedRefreshToken.id === verifiedAccessToken.id,
        refreshToken: verifiedRefreshToken,
        accessToken: verifiedAccessToken,
    }
}

