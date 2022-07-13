import { ICreateUsersDTO, IListUsersDTO } from "../../dtos";


export interface IUserRepository {
  list(): Promise<IListUsersDTO[]>;
  create(data: ICreateUsersDTO): Promise<IListUsersDTO>;
  getUserById(id: string): Promise<IListUsersDTO>
  getUserByEmail(email: string): Promise<IListUsersDTO>
  getUserByUsername(username: string): Promise<IListUsersDTO>
}

