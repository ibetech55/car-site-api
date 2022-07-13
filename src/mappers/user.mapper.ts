import { IListUsersDTO } from "../dtos";

export const UserMapper = (User: IListUsersDTO) => {
  return {
    id: User?.id,
    firstname: User.firstname
  }
}
