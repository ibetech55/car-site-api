import { CarsDto } from "../Dtos"
import { BadRequest, NotFound } from "../Utils/ResponseHandlers"
import { IPagination } from "../Utils/Pagination"
import { ICarService } from "./Interfaces/ICarService"
import { ICarRepository } from "../Repositories/Interfaces/ICarRepsoitory"

class CarService implements ICarService {
  constructor(private readonly CarRepository: ICarRepository) {
  }
  async deleteCar(id: string): Promise<String> {
    const car: CarsDto = await this.CarRepository.getCarById(id)
    if (!car) return NotFound('Car not found')
    const carDeleted = await this.CarRepository.delete(id)

    if (carDeleted) return 'Car sucessfully deleted'

    BadRequest('Something went wrong')
  }

  async updateCar(id: string, data: CarsDto): Promise<Boolean> {
    const car = await this.CarRepository.getCarById(id)
    if (!car) return NotFound('Car not found')

    const updatedCar = this.CarRepository.update(id, data)
    return updatedCar
  }

  async getCar(id: string): Promise<CarsDto> {
    const user = await this.CarRepository.getCarById(id)
    return user
  }

  async createCar(data: CarsDto): Promise<CarsDto> {
    const car = await this.CarRepository.create(data)
    return car
  }

  async getCars(Pagination: IPagination): Promise<CarsDto[]> {
    const cars = await this.CarRepository.list(Pagination)
    return cars
  }
}

export { CarService }
