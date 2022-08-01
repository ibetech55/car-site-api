import { BrandDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";

interface IBrandService {
    getBrands(Pagination: IPagination): Promise<BrandDto[]>;
    create(data: BrandDto): Promise<BrandDto>;
    getBrandById(id: string): Promise<BrandDto>;
    update(id: string, data: BrandDto): Promise<Boolean>
    delete(id: string): Promise<String>
}

export { IBrandService }
