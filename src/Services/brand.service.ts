import { BrandDto } from "../Dtos"
import { BadRequest, NotFound } from "../Utils/ResponseHandlers"
import { IPagination } from "../Utils/Pagination"
import { IBrandRepository } from "../Repositories/Interfaces/IBrandRepository"
import { IBrandService } from "./Interfaces/IBrandService"

class BrandService implements IBrandService {
    constructor(private readonly BrandRepository: IBrandRepository) {
    }
    async delete(id: string): Promise<String> {
        const brand: BrandDto = await this.BrandRepository.getBrandById(id)
        if (!brand) return NotFound('Brand not found')
        const brandDeleted = await this.BrandRepository.delete(id)

        if (brandDeleted) return 'Brand sucessfully deleted'

        BadRequest('Something went wrong')
    }

    async update(id: string, data: BrandDto): Promise<Boolean> {
        const Brand = await this.BrandRepository.getBrandById(id)
        if (!Brand) return NotFound('Brand not found')

        const updatedBrand = this.BrandRepository.update(id, data)
        return updatedBrand
    }

    async getBrandById(id: string): Promise<BrandDto> {
        const brand = await this.BrandRepository.getBrandById(id)
        return brand
    }

    async create(data: BrandDto): Promise<BrandDto> {
        const brand = await this.BrandRepository.create(data)
        return brand
    }

    async getBrands(Pagination: IPagination): Promise<BrandDto[]> {
        const brands = await this.BrandRepository.list(Pagination)
        return brands
    }
}

export { BrandService }
