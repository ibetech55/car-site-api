import { UserDto } from "../Dtos";

export const UserMapper = (User: UserDto): UserDto => {
    return {
        id: User?.id,
        firstname: User?.firstname,
        lastname: User?.lastname,
        email: User?.email,
        created_at: User?.created_at,
        active: User?.active,
        date_of_birth: User?.date_of_birth,
        username: User?.username,
        deleted_at: User?.deleted_at,
        password: User?.password,
        access_code: User?.access_code,
        profile_image: User?.profile_image
    }
}
