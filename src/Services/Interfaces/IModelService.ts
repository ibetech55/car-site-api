import { ModelDto } from "../../Dtos";
import { IPagination } from "../../Utils/Pagination";

interface IModelService {
    getModels(Pagination: IPagination): Promise<ModelDto[]>;
    create(data: ModelDto): Promise<ModelDto>;
    getModelById(id: string): Promise<ModelDto>;
    update(id: string, data: ModelDto): Promise<Boolean>
    delete(id: string): Promise<String>
}

export { IModelService }
