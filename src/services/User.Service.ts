import { IUserService } from "./Dtos/IUserService"

class UserService implements IUserService {
    constructor() {
    }

    getUsers(): any {
        const users = [
            {
                id: 1111,
                firstname: 'Prince'
            },
            {
                id: 2222,
                firstname: 'Carlos'
            },
            {
                id: 3333,
                firstname: 'Evan'
            },
        ]

        return users
    }
}

export { UserService }