import { ICreateUsersDTO, IListUsersDTO } from "../dtos"
import { IUserRepository } from "../repositories/interfaces/IUserRepository"
import { IUserService } from "./interfaces/IUserService"

class UserService implements IUserService {
  constructor(private readonly UserRepository: IUserRepository) {
  }

  async createUser(data: ICreateUsersDTO): Promise<any> {
    const user = await this.UserRepository.create(data)
    return user
  }

  async getUsers(): Promise<any> {
    const users = await this.UserRepository.list()
    return users
  }
}

export { UserService }
