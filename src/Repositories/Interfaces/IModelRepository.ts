import { BrandDto, ModelDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";


export interface IModelRepository {
    list(pagination: IPagination): Promise<ModelDto[]>;
    create(data: ModelDto): Promise<ModelDto>;
    getModelById(id: string): Promise<ModelDto>;
    update(id: string, data: ModelDto): Promise<Boolean>;
    delete(id: string): Promise<Boolean>;
    listByBrandId(brandId: string, pagination: IPagination): Promise<ModelDto[]>;
}

