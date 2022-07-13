export interface IListUsersDTO {
  id?: string;
  firstname: string;
}

export interface ICreateUsersDTO {
  firstname: string;
  lastname: string;
  date_of_birth: string;
  email: string;
  username: string;
}
