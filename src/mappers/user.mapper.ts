import { Users } from "../database/entities/user.model";
import { IListUsersDTO } from "../dtos";

export const UserMapper = (User: Users): IListUsersDTO => {
  return {
    id: User?.id,
    firstname: User?.firstname,
    lastname: User?.lastname,
    email: User?.email,
    created_at: User?.created_at,
    active: User?.active,
    date_of_birth: User?.date_of_birth,
    username: User?.username,
    deleted_at: User?.deleted_at
  }
}
