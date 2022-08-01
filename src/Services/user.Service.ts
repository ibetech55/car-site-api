import { AppError } from "../ErrorHandler/AppError"
import { IUserRepository } from "../Repositories/Interfaces/IUserRepository"
import { Hashpassword } from "../Utils/HashPassword"
import { BadRequest, NotFound } from "../Utils/ResponseHandlers"
import { IUserService } from "./Interfaces/IUserService"
import { StatusCodeEnum } from '../Enums/statusCodes'
import { IPagination } from "../Utils/Pagination"
import { UserDto } from "../Dtos"
import { RegistrationEmailQueue } from "../Queue"
import { RandomCode } from "../Utils/CodeGenerator"
const { BAD_REQUEST } = StatusCodeEnum

class UserService implements IUserService {
    constructor(private readonly UserRepository: IUserRepository, private readonly HashPassword: Hashpassword) {
    }
    async deleteUser(id: string): Promise<Boolean> {
        const user: UserDto = await this.UserRepository.getUserById(id)
        if (!user) return NotFound('User not found')
        const d = await this.UserRepository.delete(id)
        return d
    }

    async updateUser(id: string, data: UserDto): Promise<Boolean> {
        const user = await this.UserRepository.getUserById(id)
        if (!user) return NotFound('User not found')

        const updatedUser = this.UserRepository.update(id, data)
        return updatedUser
    }

    async getUser(id: string): Promise<UserDto> {
        const user = await this.UserRepository.getUserById(id)
        return user
    }

    async createUser(data: UserDto): Promise<UserDto> {
        const email = await this.UserRepository.getUserByEmail(data.email)

        const username = await this.UserRepository.getUserByUsername(data.username)

        // if (email.email || username.username) BadRequest('User already exists')

        const hashedPassword = this.HashPassword.EncryptPassword(data.password)
        data.password = hashedPassword;

        const accessCode = RandomCode();
        data.access_code = accessCode;

        const user = await this.UserRepository.create(data)

        if (user) {
            const registrationEmailData = {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                accessCode
            }

            await RegistrationEmailQueue.add({ user: registrationEmailData })
        }
        return user
    }

    async getUsers(Pagination: IPagination): Promise<UserDto[]> {
        const users = await this.UserRepository.list(Pagination)
        return users
    }
}

export { UserService }
