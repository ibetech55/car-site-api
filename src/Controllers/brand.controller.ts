import { Request, Response } from 'express'
import { IBrandService } from '../Services/Interfaces/IBrandService'
import { pagination } from '../Utils/Pagination'

export class BrandController {

    constructor(private readonly BrandService: IBrandService) {
    }

    async getBrands(req: Request, res: Response) {
        const paginate = pagination(req.query)
        const data = await this.BrandService.getBrands(paginate)
        return res.status(200).json(data)
    }

    async createBrand(req: Request, res: Response) {
        const data = await this.BrandService.create(req.body)
        return res.status(200).json(data)
    }

    async getBrand(req: Request, res: Response) {
        const data = await this.BrandService.getBrandById(req.params.id)
        return res.status(200).json(data)
    }

    async update(req: Request, res: Response) {
        const data = await this.BrandService.update(req.params.id, req.body)
        return res.status(200).json(data)
    }

    async delete(req: Request, res: Response) {
        const data = await this.BrandService.delete(req.params.id)
        return res.status(200).json(data)
    }
}

