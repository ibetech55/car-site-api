import { UserDto } from "../Dtos"
import { IUserRepository } from "../Repositories/Interfaces/IUserRepository"
import { BadRequest } from "../Utils/ResponseHandlers"
import { AuthenticatedUser, IAuthService, LoginUser, RefreshResponse } from "./Interfaces/IAuthService"
import { Hashpassword } from "../Utils/HashPassword";
import { IAuthRepository } from "../Repositories/Interfaces/IAuthRepository";
import { generateAccessToken, generateRefreshToken, ITokenPayload, verifyRefreshToken } from "../Utils/TokenHandelers";

class AuthService implements IAuthService {
    constructor(private readonly AuthRepository: IAuthRepository, private readonly UserRepository: IUserRepository, private readonly HashPassord: Hashpassword) {
    }
    async Refresh(token: string): Promise<RefreshResponse> {
        if (token) {
            const payload: ITokenPayload = verifyRefreshToken(token) as ITokenPayload

            if (payload) {
                const newAccessToken = generateAccessToken({ id: payload.id })
                return { accessToken: newAccessToken }
            }
        } else {
            return null
        }
    }

    async Login(data: LoginUser): Promise<AuthenticatedUser> {
        const user: UserDto = await this.UserRepository.getUserByEmail(data?.email)

        if (!user) BadRequest('Invalid Login')

        const checkPassword = this.HashPassord.DecryptPassword(data.password, user.password)
        if (!checkPassword) BadRequest('Invalid Login')

        const accessToken = generateAccessToken({ id: user.id })

        const refreshToken = generateRefreshToken({ id: user.id })

        const saveToken = await this.AuthRepository.create({ user_id: user.id, token: refreshToken })

        if (saveToken) {
            const authenticatedUser = {
                accessToken,
                refreshToken,
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname
            }

            return authenticatedUser
        }
    }
}

export { AuthService }
