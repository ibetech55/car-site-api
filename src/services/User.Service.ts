import { ICreateUsersDTO, IListUsersDTO } from "../dtos"
import { AppError } from "../errors/AppError"
import { IUserRepository } from "../repositories/interfaces/IUserRepository"
import { Hashpassword } from "../utils/HashPassword"
import { BadRequest } from "../utils/ResponseHandlers"
import { IUserService } from "./interfaces/IUserService"
import { StatusCodeEnum } from '../enums/statusCodes'
const { BAD_REQUEST } = StatusCodeEnum

class UserService implements IUserService {
  constructor(private readonly UserRepository: IUserRepository, private readonly HashPassword: Hashpassword) {
  }

  async createUser(data: ICreateUsersDTO): Promise<IListUsersDTO> {
    const email = await this.UserRepository.getUserByEmail(data.email)

    const username = await this.UserRepository.getUserByUsername(data.username)

    if (email || username) BadRequest('User already exists')


    const hashedPassword = this.HashPassword.EncryptPassword(data.password)
    data.password = hashedPassword;

    const user = await this.UserRepository.create(data)
    return user
  }

  async getUsers(): Promise<IListUsersDTO[]> {
    const users = await this.UserRepository.list()
    return users
  }
}

export { UserService }
