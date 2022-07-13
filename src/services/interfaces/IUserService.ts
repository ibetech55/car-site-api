import { ICreateUsersDTO, IListUsersDTO } from "../../dtos";

interface IUserService {
  getUsers(): Promise<IListUsersDTO[]>;
  createUser(data: ICreateUsersDTO): Promise<IListUsersDTO>;
}

export { IUserService }
