import { ICreateUsersDTO, IListUsersDTO, IUpdateUserDto } from "../../dtos";
import { IPagination } from "../../utils/Pagination";

interface IUserService {
  getUsers(Pagination: IPagination): Promise<IListUsersDTO[]>;
  createUser(data: ICreateUsersDTO): Promise<IListUsersDTO>;
  getUser(id: string): Promise<IListUsersDTO>;
  updateUser(id: string, data: IUpdateUserDto): Promise<Boolean>
  deleteUser(id: string): Promise<Boolean>
}

export { IUserService }
