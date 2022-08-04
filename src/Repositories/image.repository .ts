import { Repository } from "typeorm";
import { AppDataSource } from '../Database'
import { IImageRepository } from "./Interfaces/IImageRepository";
import { Images } from "../Database/entities/image.model";
import { IPagination } from "../Utils/Pagination";
import { ImageDto } from "../Dtos";

class ImageRepository implements IImageRepository {
    private readonly repository: Repository<Images>

    constructor() {
        this.repository = AppDataSource.getRepository<Images>(Images)
    }

    async delete(id: string): Promise<Boolean> {
        try {
            await this.repository.softDelete(id)
            return true;
        } catch (error) {
            console.log(error)
        }

    }

    async update(id: string, data: ImageDto): Promise<boolean> {
        try {
            await this.repository.update(id, { ...data })
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    async getImageById(id: string): Promise<ImageDto> {
        try {
            const Image = await this.repository.findOne({ where: {} })
            return Image
        } catch (error) {
            console.log(error)
        }
    }

    async list(pagination: IPagination): Promise<ImageDto[]> {
        try {
            const Images = await this.repository.find({
                skip: pagination.skip ? pagination.skip : null,
                take: pagination.limit ? pagination.limit : null,
                order: pagination.orderBy ? { [pagination.orderBy]: pagination.orderType } : null,
            })

            return Images;
        } catch (error) {
            console.log(error)
        }
    }

    async create(data: ImageDto): Promise<ImageDto> {
        try {
            const createdImage = this.repository.create(data);
            const newImage = await this.repository.save(createdImage)

            return newImage
        } catch (error) {
            console.log(error)
        }

    }
}

export { ImageRepository }
