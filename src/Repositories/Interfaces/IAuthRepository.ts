import { AuthDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";


export interface IAuthRepository {
    list(pagination: IPagination): Promise<AuthDto[]>;
    create(data: AuthDto): Promise<AuthDto>;
    getAuthByToken(token?: string): Promise<AuthDto>
}

