import { ImageDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";


export interface IImageRepository {
    list(pagination: IPagination): Promise<ImageDto[]>;
    create(data: ImageDto): Promise<ImageDto>;
    getImageById(id: string): Promise<ImageDto>
    update(id: string, data: ImageDto): Promise<Boolean>
    delete(id: string): Promise<Boolean>
}

