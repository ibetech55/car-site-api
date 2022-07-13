import { ICreateUsersDTO, IListUsersDTO } from "../../dtos";


export interface IUserRepository {
  list(): Promise<IListUsersDTO[]>;
  create(data: ICreateUsersDTO): Promise<IListUsersDTO[]>;
}

