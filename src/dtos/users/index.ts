export interface IListUsersDTO {
  id?: string;
  firstname: string;
  lastname: string;
  date_of_birth: Date;
  email: string;
  username: string;
  created_at: Date;
  active: boolean;
}

export interface ICreateUsersDTO {
  firstname: string;
  lastname: string;
  date_of_birth: string;
  email: string;
  username: string;
  password: string
}
