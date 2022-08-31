import { BrandDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";


export interface IBrandRepository {
    list(pagination: IPagination): Promise<BrandDto[]>;
    create(data: BrandDto): Promise<BrandDto>;
    getBrandById(id: string): Promise<BrandDto>;
    update(id: string, data: BrandDto): Promise<Boolean>;
    delete(id: string): Promise<Boolean>;
}

