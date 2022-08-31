import { BrandDto, ModelDto } from "../Dtos"
import { BadRequest, NotFound } from "../Utils/ResponseHandlers"
import { IPagination } from "../Utils/Pagination"
import { IModelRepository } from "../Repositories/Interfaces/IModelRepository"
import { IModelService } from "./Interfaces/IModelService"

class ModelService implements IModelService {
    constructor(private readonly ModelRepository: IModelRepository) {
    }
    async listByBrandId(brandId: string, pagination: IPagination): Promise<ModelDto[]> {
        const models = await this.ModelRepository.listByBrandId(brandId, pagination)

        if (!models) NotFound('No models were found')

        return models;
    }
    async delete(id: string): Promise<String> {
        const model: ModelDto = await this.ModelRepository.getModelById(id)
        if (!model) return NotFound('Model not found')
        const modelDeleted = await this.ModelRepository.delete(id)

        if (modelDeleted) return 'Model sucessfully deleted'

        BadRequest('Something went wrong')
    }

    async update(id: string, data: ModelDto): Promise<Boolean> {
        const Model = await this.ModelRepository.getModelById(id)
        if (!Model) return NotFound('Model not found')

        const updatedModel = this.ModelRepository.update(id, data)
        return updatedModel
    }

    async getModelById(id: string): Promise<ModelDto> {
        const model = await this.ModelRepository.getModelById(id)
        return model
    }

    async create(data: ModelDto): Promise<ModelDto> {
        const model = await this.ModelRepository.create(data)
        return model
    }

    async getModels(Pagination: IPagination): Promise<ModelDto[]> {
        const models = await this.ModelRepository.list(Pagination)
        return models
    }
}

export { ModelService }
