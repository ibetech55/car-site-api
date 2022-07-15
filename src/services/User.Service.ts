import { ICreateUsersDTO, IListUsersDTO, IUpdateUserDto } from "../dtos"
import { AppError } from "../errors/AppError"
import { IUserRepository } from "../repositories/interfaces/IUserRepository"
import { Hashpassword } from "../utils/HashPassword"
import { BadRequest, NotFound } from "../utils/ResponseHandlers"
import { IUserService } from "./interfaces/IUserService"
import { StatusCodeEnum } from '../enums/statusCodes'
import { IPagination } from "../utils/Pagination"
const { BAD_REQUEST } = StatusCodeEnum

class UserService implements IUserService {
  constructor(private readonly UserRepository: IUserRepository, private readonly HashPassword: Hashpassword) {
  }
  async deleteUser(id: string): Promise<Boolean> {
    const user: IListUsersDTO = await this.UserRepository.getUserById(id)
    if (!user) return NotFound('User not found')
    const d = await this.UserRepository.delete(id)
    return d
  }

  async updateUser(id: string, data: IUpdateUserDto): Promise<Boolean> {
    const user = await this.UserRepository.getUserById(id)
    if (!user) return NotFound('User not found')

    const updatedUser = this.UserRepository.update(id, data)
    return updatedUser
  }

  async getUser(id: string): Promise<IListUsersDTO> {
    const user = await this.UserRepository.getUserById(id)
    return user
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

  async getUsers(Pagination: IPagination): Promise<IListUsersDTO[]> {
    const users = await this.UserRepository.list(Pagination)
    return users
  }
}

export { UserService }
