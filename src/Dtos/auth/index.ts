import { UserDto } from "../users";

export interface AuthDto {
    id?: string;
    token?: string;
    user_id?: string;
    user?: UserDto
}
