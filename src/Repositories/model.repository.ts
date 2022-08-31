import { Repository } from "typeorm";
import { AppDataSource } from '../Database'
import { IModelRepository } from "./Interfaces/IModelRepository";
import { Models } from "../Database/entities/models.model";
import { IPagination } from "../Utils/Pagination";
import { ModelDto } from "../Dtos";

class ModelRepository implements IModelRepository {
    private readonly repository: Repository<Models>

    constructor() {
        this.repository = AppDataSource.getRepository<Models>(Models)
    }
    async findOne(data: ModelDto): Promise<ModelDto> {
        const model = await this.repository.findOne({ where: { ...data } })
        return model;
    }

    async delete(id: string): Promise<Boolean> {
        try {
            await this.repository.softDelete(id)
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    async update(id: string, data: ModelDto): Promise<boolean> {
        try {
            await this.repository.update(id, { ...data })
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    async getModelById(id: string): Promise<ModelDto> {
        try {
            const model = await this.repository.findOne({ where: { id } })
            return model
        } catch (error) {
            console.log(error)
        }
    }

    async list(pagination: IPagination): Promise<ModelDto[]> {
        try {
            const models = await this.repository.find({
                skip: pagination.skip ? pagination.skip : null,
                take: pagination.limit ? pagination.limit : null,
                order: pagination.orderBy ? { [pagination.orderBy]: pagination.orderType } : null,
                relations: ['brands'],
            })
            return models;
        } catch (error) {
            console.log(error)
        }
    }

    async create(Model: ModelDto): Promise<ModelDto> {
        try {
            const createdModel = this.repository.create(Model);
            const newModel = await this.repository.save(createdModel)

            return newModel
        } catch (error) {
            console.log(error)
        }
    }

    async listByBrandId(brandId: string, pagination: IPagination): Promise<ModelDto[]> {
        console.log(brandId)
        try {
            const models = await this.repository.find({
                where: { brand_id: brandId },
                order: pagination.orderBy ? { [pagination.orderBy]: pagination.orderType } : null,
                relations: ['brands'],
            })
            return models;
        } catch (error) {
            console.log(error)
        }
    }


}

export { ModelRepository }
