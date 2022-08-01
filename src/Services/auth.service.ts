import { UserDto } from "../Dtos"
import { IUserRepository } from "../Repositories/Interfaces/IUserRepository"
import { AccessDenied, BadRequest, NotFound } from "../Utils/ResponseHandlers"
import { AuthenticatedUser, IAuthService, LoginUser, RefreshResponse } from "./Interfaces/IAuthService"
import { Hashpassword } from "../Utils/HashPassword";
import { IAuthRepository } from "../Repositories/Interfaces/IAuthRepository";
import { generateAccessToken, generateRefreshToken, ITokenPayload, verifyRefreshToken } from "../Utils/TokenHandelers";

class AuthService implements IAuthService {
    constructor(private readonly AuthRepository: IAuthRepository, private readonly UserRepository: IUserRepository, private readonly HashPassord: Hashpassword) {
    }

    async VerifyAccount(id: string, data: UserDto): Promise<boolean> {
        const user = await this.UserRepository.getUserById(id);
        if (!user) return NotFound('No user found');
        if (user.access_code !== data.access_code) return BadRequest('Invalid code')

        const verifiedUser = await this.UserRepository.update(id, { active: true, access_code: null })
        if (verifiedUser) return true
        return false
    }

    async Refresh(token: string): Promise<RefreshResponse> {
        if (token) {
            const payload: ITokenPayload = verifyRefreshToken(token) as ITokenPayload

            if (payload) {
                const user = await this.UserRepository.getUserById(payload.id);
                if (!user || !user.active) BadRequest('User does not exist');
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

        if (!user.active) AccessDenied('Access Denied')

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
