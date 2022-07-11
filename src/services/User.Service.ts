import { IUserRepository } from "../repositories/user.repository/interfaces/IUserRepository"
import { IUserService } from "./Dtos/IUserService"

class UserService implements IUserService {
  constructor(private readonly UserRepository: IUserRepository) {
  }

  async getUsers(): Promise<any> {
    const users = await this.UserRepository.list()
    return users
  }
}

export { UserService }
