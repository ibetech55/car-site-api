import { UserDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";

interface IUserService {
    getUsers(Pagination: IPagination): Promise<UserDto[]>;
    createUser(data: UserDto, file: any): Promise<UserDto>;
    getUser(id: string): Promise<UserDto>;
    updateUser(id: string, data: UserDto): Promise<Boolean>
    deleteUser(id: string): Promise<Boolean>
}

export { IUserService }
