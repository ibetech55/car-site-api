import { Request, Response } from 'express'
import { IModelService } from '../Services/Interfaces/IModelService'
import { pagination } from '../Utils/Pagination'

export class ModelController {

    constructor(private readonly ModelService: IModelService) {
    }

    async getModels(req: Request, res: Response) {
        const paginate = pagination(req.query)
        const data = await this.ModelService.getModels(paginate)
        return res.status(200).json(data)
    }

    async createModel(req: Request, res: Response) {
        const data = await this.ModelService.create(req.body)
        return res.status(200).json(data)
    }

    async getModel(req: Request, res: Response) {
        const data = await this.ModelService.getModelById(req.params.id)
        return res.status(200).json(data)
    }

    async update(req: Request, res: Response) {
        const data = await this.ModelService.update(req.params.id, req.body)
        return res.status(200).json(data)
    }

    async delete(req: Request, res: Response) {
        const data = await this.ModelService.delete(req.params.id)
        return res.status(200).json(data)
    }

    async getModelsByBrandId(req: Request, res: Response) {
        const { brandId } = req.params
        const pagination = req.query
        const data = await this.ModelService.listByBrandId(brandId as string, pagination)
        return res.status(200).json(data)
    }
}

