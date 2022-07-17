import { Request, Response } from 'express'
import { IUserService } from '../services/interfaces/IUserService'
import { pagination } from '../utils/Pagination'

export class UserController {

  constructor(private readonly UserService: IUserService) {
  }

  async getUsers(req: Request, res: Response) {
    const paginate = pagination(req.query)
    const data = await this.UserService.getUsers(paginate)
    return res.status(200).json(data)
  }

  async createUser(req: Request, res: Response) {
    const data = await this.UserService.createUser(req.body)
    return res.status(200).json(data)
  }

  async getUser(req: Request, res: Response) {
    const data = await this.UserService.getUser(req.params.id)
    return res.status(200).json(data)
  }

  async updateUser(req: Request, res: Response) {
    const data = await this.UserService.updateUser(req.params.id, req.body)
    return res.status(200).json(data)
  }

  async deleteUser(req: Request, res: Response) {
    const data = await this.UserService.deleteUser(req.params.id)
    return res.status(200).json(data)
  }
}

