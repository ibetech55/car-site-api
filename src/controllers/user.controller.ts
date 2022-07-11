import { Request, Response } from 'express'
import { IUserService } from '../services/Dtos/IUserService'
export class UserController {

  constructor(private readonly UserService: IUserService) {
  }

  async getUsers(req: Request, res: Response) {
    const data = await this.UserService.getUsers()
    console.log(data, 333)
    res.send(data)
  }
}

