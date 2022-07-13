import { ICreateUsersDTO, IListUsersDTO } from "../dtos"
import { IUserRepository } from "../repositories/interfaces/IUserRepository"
import { Hashpassword } from "../utils/HashPassword"
import { IUserService } from "./interfaces/IUserService"

class UserService implements IUserService {
  constructor(private readonly UserRepository: IUserRepository, private readonly HashPassword: Hashpassword) {
  }

  async createUser(data: ICreateUsersDTO): Promise<any> {
    const hashedPassword = this.HashPassword.GeneratePassword(data.password)
    data.password = hashedPassword;
    const user = await this.UserRepository.create(data)
    return user
  }

  async getUsers(): Promise<any> {
    const users = await this.UserRepository.list()
    return users
  }
}

export { UserService }
