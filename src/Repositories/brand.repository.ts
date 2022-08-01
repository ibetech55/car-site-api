import { Repository } from "typeorm";
import { AppDataSource } from '../Database'
import { IBrandRepository } from "./Interfaces/IBrandRepository";
import { Brands } from "../Database/entities/brand.model";
import { IPagination } from "../Utils/Pagination";
import { BrandDto } from "../Dtos";

class BrandRepository implements IBrandRepository {
    private readonly repository: Repository<Brands>

    constructor() {
        this.repository = AppDataSource.getRepository<Brands>(Brands)
    }
    async findOne(data: BrandDto): Promise<BrandDto> {
        const brand = await this.repository.findOne({ where: {} })
        return brand;
    }

    async delete(id: string): Promise<Boolean> {
        try {
            await this.repository.softDelete(id)
            return true;
        } catch (error) {
            console.log(error)
        }

    }

    async update(id: string, data: BrandDto): Promise<boolean> {
        try {
            await this.repository.update(id, { ...data })
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    async getBrandById(id: string): Promise<BrandDto> {
        try {
            const Brand = await this.repository.findOne({ where: {} })
            return Brand
        } catch (error) {
            console.log(error)
        }
    }

    async list(pagination: IPagination): Promise<BrandDto[]> {
        try {
            const Brands = await this.repository.find({
                skip: pagination.skip ? pagination.skip : null,
                take: pagination.limit ? pagination.limit : null,
                order: pagination.orderBy ? { [pagination.orderBy]: pagination.orderType } : null,
            })

            return Brands;
        } catch (error) {
            console.log(error)
        }
    }

    async create(Brand: BrandDto): Promise<BrandDto> {
        try {
            const createdBrand = this.repository.create(Brand);
            const newBrand = await this.repository.save(createdBrand)

            return newBrand
        } catch (error) {
            console.log(error)
        }

    }
}

export { BrandRepository }
