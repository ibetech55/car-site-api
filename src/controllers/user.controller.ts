import { Request, Response } from 'express'
import { IUserService } from '../services/Dtos/IUserService'
export class UserController {

    constructor(private readonly UserService: IUserService) {
    }

    getUsers(req: Request, res: Response) {
        const data = this.UserService.getUsers()
        res.send(data)
    }
}

