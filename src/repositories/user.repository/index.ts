import { Repository } from "typeorm";
import { Users } from "../../database/models/user.model";
import { AppDataSource } from '../../database'
import { IUserRepository, IListUsersDTO } from "./interfaces/IUserRepository";


class UserRepository implements IUserRepository {
  private readonly repository: Repository<Users>

  constructor() {
    this.repository = AppDataSource.getRepository<Users>(Users)
  }

  async list(): Promise<IListUsersDTO[]> {
    const users = await this.repository.find({
      select: ['id', 'firstname']
    })
    return users
  }
}

export { UserRepository }
