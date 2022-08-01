import { ImageDto } from "../Dtos"
import { BadRequest, NotFound } from "../Utils/ResponseHandlers"
import { IPagination } from "../Utils/Pagination"
import { IImageRepository } from "../Repositories/Interfaces/IImageRepository"
import { IImageService } from "./Interfaces/IImageService"

class ImageService implements IImageService {
    constructor(private readonly ImageRepository: IImageRepository) {
    }
    async delete(id: string): Promise<String> {
        const image: ImageDto = await this.ImageRepository.getImageById(id)
        if (!image) return NotFound('Image not found')
        const imageDeleted = await this.ImageRepository.delete(id)

        if (imageDeleted) return 'Image sucessfully deleted'

        BadRequest('Something went wrong')
    }

    async update(id: string, data: ImageDto): Promise<Boolean> {
        const Image = await this.ImageRepository.getImageById(id)
        if (!Image) return NotFound('Image not found')

        const updatedImage = this.ImageRepository.update(id, data)
        return updatedImage
    }

    async getImageById(id: string): Promise<ImageDto> {
        const image = await this.ImageRepository.getImageById(id)
        return image
    }

    async create(data: ImageDto): Promise<ImageDto> {
        const image = await this.ImageRepository.create(data)
        return image
    }

    async getImages(Pagination: IPagination): Promise<ImageDto[]> {
        const images = await this.ImageRepository.list(Pagination)
        return images
    }
}

export { ImageService }
