import { Request, Response } from 'express'
import { encode, decode } from 'node-base64-image';
import { IUserService } from '../Services/Interfaces/IUserService'
import { pagination } from '../Utils/Pagination'

export class UserController {

    constructor(private readonly UserService: IUserService) {
    }

    async getUsers(req: Request, res: Response) {
        const paginate = pagination(req.query)
        const data = await this.UserService.getUsers(paginate)
        return res.status(200).json(data)
    }

    async createUser(req: Request, res: Response) {

        const data = await this.UserService.createUser(req.body, req.files)
        return res.status(200).json(data)
    }

    async getUser(req: Request, res: Response) {
        const data = await this.UserService.getUser(req.params.id)
        return res.status(200).json(data)
    }

    async updateUser(req: Request, res: Response) {
        const data = await this.UserService.updateUser(req.params.id, req.body)
        return res.status(201).json(data)
    }

    async deleteUser(req: Request, res: Response) {
        const data = await this.UserService.deleteUser(req.params.id)
        return res.status(200).json(data)
    }

    async getMe(req: Request, res: Response) {
        const c = req.cookies
        const data = await this.UserService.getUser('db4a7f8d-7476-4a0a-a53e-a1d94b4c5fe8')
        return res.status(200).json(data)
    }
}

