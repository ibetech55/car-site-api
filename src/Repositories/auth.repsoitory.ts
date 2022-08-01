import { Repository } from "typeorm";
import { AppDataSource } from '../Database'
import { IPagination } from "../Utils/Pagination";
import { Auth } from "../Database/entities/auth.model";
import { AuthDto, CarsDto } from "../Dtos";
import { CarMapper } from "../Mappers/car.mapper";
import { IAuthRepository } from "./Interfaces/IAuthRepository";

class AuthRepository implements IAuthRepository {
    private readonly repository: Repository<Auth>

    constructor() {
        this.repository = AppDataSource.getRepository<Auth>(Auth)
    }


    async getAuthByToken(token: string): Promise<AuthDto> {
        try {
            const auth = await this.repository.findOne({ where: { token } })
            return auth
        } catch (error) {
            console.log(error)
        }
    }

    async list(pagination: IPagination): Promise<AuthDto[]> {
        try {
            const auth = await this.repository.find({
                skip: pagination.skip ? pagination.skip : null,
                take: pagination.limit ? pagination.limit : null,
            });
            return auth;
        } catch (error) {
            console.log(error)
        }
    }

    async create(data: AuthDto): Promise<AuthDto> {
        try {
            const creartedAuth = this.repository.create(data);
            const newAuth = await this.repository.save(creartedAuth)

            return newAuth
        } catch (error) {
            console.log(error)
        }

    }
}

export { AuthRepository }
