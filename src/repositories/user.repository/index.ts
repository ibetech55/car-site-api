import { Repository } from "typeorm";
import { Users } from "../../database/models/user.model";
import { AppDataSource } from '../../database'
import { IUserRepository } from "../interfaces/IUserRepository";
import { ICreateUsersDTO, IListUsersDTO } from "../../dtos/users";
import { UserMapper } from "../../mappers/user.mapper";


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

  async create(user: ICreateUsersDTO): Promise<any> {
    const createdUser = this.repository.create(user);
    const newUser = await this.repository.save(createdUser)

    return UserMapper(newUser)
  }
}

export { UserRepository }
