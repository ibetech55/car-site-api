import { ImageDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";

interface IImageService {
    getImages(Pagination: IPagination): Promise<ImageDto[]>;
    create(data: ImageDto): Promise<ImageDto>;
    getImageById(id: string): Promise<ImageDto>;
    update(id: string, data: ImageDto): Promise<Boolean>
    delete(id: string): Promise<String>
}

export { IImageService }
