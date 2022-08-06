import { CarsDto, ImageDto } from "../Dtos"
import { BadRequest, NotFound } from "../Utils/ResponseHandlers"
import { IPagination } from "../Utils/Pagination"
import { ICarService } from "./Interfaces/ICarService"
import { ICarRepository } from "../Repositories/Interfaces/ICarRepsoitory"
import { HandleImage } from "../Utils/ImageHandler"
import { GenerateImageName } from "../Utils/CodeGenerator"

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

    async createCar(data: CarsDto, files): Promise<CarsDto> {
        const carImages = files.car_images
        const car = await this.CarRepository.create(data)

        carImages.map(async (img, index) => {
            const imageData: ImageDto = {
                image_name: GenerateImageName(img.name),
                image_type: 'car_image',
                main_image: index === 0 ? true : false,
                car_id: car.id,
                user_id: car.user_id
            }
            HandleImage(img, { ...imageData }, true)
        })

        return car
    }

    async getCars(Pagination: IPagination): Promise<CarsDto[]> {
        const cars = await this.CarRepository.list(Pagination)
        return cars
    }
}

export { CarService }
