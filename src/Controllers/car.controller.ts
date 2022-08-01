import { Request, Response } from 'express'
import { ICarService } from '../Services/Interfaces/ICarService'
import { pagination } from '../Utils/Pagination'

export class CarController {

  constructor(private readonly CarService: ICarService) {
  }

  async getcars(req: Request, res: Response) {
    const paginate = pagination(req.query)
    const data = await this.CarService.getCars(paginate)
    return res.status(200).json(data)
  }

  async createCar(req: Request, res: Response) {
    const data = await this.CarService.createCar(req.body)
    return res.status(200).json(data)
  }

  async getCar(req: Request, res: Response) {
    const data = await this.CarService.getCar(req.params.id)
    return res.status(200).json(data)
  }

  async updateCar(req: Request, res: Response) {
    const data = await this.CarService.updateCar(req.params.id, req.body)
    return res.status(200).json(data)
  }

  async deleteCar(req: Request, res: Response) {
    const data = await this.CarService.deleteCar(req.params.id)
    return res.status(200).json(data)
  }
}

