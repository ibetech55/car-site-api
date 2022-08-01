import { AuthDto, CarsDto, UserDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";

export interface LoginUser {
    email: string;
    password: string;
}

export interface AuthenticatedUser {
    id?: string,
    firstname?: string;
    lastname?: string;
    accessToken?: string;
    refreshToken?: string;
}

export interface RefreshResponse {
    accessToken?: string;
}

export interface IAuthService {
    Login(data: LoginUser): Promise<AuthenticatedUser>;
    Refresh(token: string): Promise<RefreshResponse>;
    VerifyAccount(id: string, data: UserDto): Promise<boolean>
}

