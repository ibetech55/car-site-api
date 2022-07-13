import { Request, Response } from 'express'
import { IUserService } from '../services/interfaces/IUserService'
export class UserController {

  constructor(private readonly UserService: IUserService) {
  }

  async getUsers(req: Request, res: Response) {
    const data = await this.UserService.getUsers()
    return res.status(200).json(data)
  }

  async createUser(req: Request, res: Response) {
    const data = await this.UserService.createUser(req.body)
    return res.status(200).json(data)
  }
}

