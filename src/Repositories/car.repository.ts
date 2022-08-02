import { Repository } from "typeorm";
import { AppDataSource } from '../Database'
import { IPagination } from "../Utils/Pagination";
import { Cars } from "../Database/entities/car.model";
import { ICarRepository } from "./Interfaces/ICarRepsoitory";
import { CarsDto } from "../Dtos";
import { CarMapper } from "../Mappers/car.mapper";

class CarRepository implements ICarRepository {
    private readonly repository: Repository<Cars>

    constructor() {
        this.repository = AppDataSource.getRepository<Cars>(Cars)
    }
    async delete(id: string): Promise<Boolean> {
        try {
            await this.repository.softDelete(id)
            return true;
        } catch (error) {
            console.log(error)
        }

    }

    async update(id: string, data: CarsDto): Promise<boolean> {
        try {
            await this.repository.update(id, { ...data })
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    async getCarById(id: string): Promise<CarsDto> {
        try {
            const car = await this.repository.findOne({ where: { id } })
            return car
        } catch (error) {
            console.log(error)
        }
    }

    async list(pagination: IPagination): Promise<CarsDto[]> {
        try {
            const cars = await this.repository.find({
                skip: pagination.skip ? pagination.skip : null,
                take: pagination.limit ? pagination.limit : null,
                // order: { brands: { name: 'ASC' } },
                relations: ['users', 'brands', 'models', 'images']
            })
            return cars;
        } catch (error) {
            console.log(error)
        }
    }

    async create(data: CarsDto): Promise<CarsDto> {
        try {
            const creartedCar = this.repository.create(data);
            const newCar = await this.repository.save(creartedCar)

            return newCar
        } catch (error) {
            console.log(error)
        }

    }
}

export { CarRepository }
