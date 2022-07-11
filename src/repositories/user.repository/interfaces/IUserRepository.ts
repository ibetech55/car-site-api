interface IListUsersDTO {
  id?: string;
  firstname: string;
}

interface IUserRepository {
  list(): Promise<IListUsersDTO[]>;
}

export { IUserRepository, IListUsersDTO }
