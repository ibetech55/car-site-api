import { ICreateUsersDTO, IListUsersDTO, IUpdateUserDto } from "../../dtos";


export interface IUserRepository {
  list(paginate: any): Promise<IListUsersDTO[]>;
  create(data: ICreateUsersDTO): Promise<IListUsersDTO>;
  getUserById(id: string): Promise<IListUsersDTO>
  getUserByEmail(email: string): Promise<IListUsersDTO>
  getUserByUsername(username: string): Promise<IListUsersDTO>
  update(id: string, data: IUpdateUserDto): Promise<Boolean>
  delete(id: string): Promise<Boolean>
}

