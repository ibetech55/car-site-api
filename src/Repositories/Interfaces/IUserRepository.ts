import { UserDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";


export interface IUserRepository {
    list(paginate: IPagination): Promise<UserDto[]>;
    create(data: UserDto): Promise<UserDto>;
    getUserById(id: string): Promise<UserDto>
    getUserByEmail(email: string): Promise<UserDto>
    getUserByUsername(username: string): Promise<UserDto>
    update(id: string, data: UserDto): Promise<Boolean>
    delete(id: string): Promise<Boolean>
    findOne(data: UserDto): Promise<UserDto>
}

