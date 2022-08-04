import { Repository } from "typeorm";
import { AppDataSource } from '../Database'
import { IUserRepository } from "./Interfaces/IUserRepository";
import { UserMapper } from "../Mappers/user.mapper";
import { Users } from "../Database/entities/user.model";
import { IPagination } from "../Utils/Pagination";
import { UserDto } from "../Dtos";

class UserRepository implements IUserRepository {
    private readonly repository: Repository<Users>

    constructor() {
        this.repository = AppDataSource.getRepository<Users>(Users)
    }
    async findOne(data: UserDto): Promise<UserDto> {
        const a = await this.repository.findOne({ where: { password: data.password, email: data.email } })
        return a;
    }

    async delete(id: string): Promise<Boolean> {
        try {
            await this.repository.softDelete(id)
            return true;
        } catch (error) {
            console.log(error)
        }

    }

    async update(id: string, data: UserDto): Promise<boolean> {
        try {
            await this.repository.update(id, { ...data })
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    async getUserById(id: string): Promise<UserDto> {
        try {
            const user = await this.repository.findOne({ where: { id }, relations: ['cars'] })
            return UserMapper(user)
        } catch (error) {
            console.log(error)
        }
    }

    async getUserByEmail(email: string): Promise<UserDto> {
        try {
            const user = await this.repository.findOne({ where: { email } })
            return UserMapper(user)
        } catch (error) {
            console.log(error)
        }
    }

    async getUserByUsername(username: string): Promise<UserDto> {
        try {
            const user = await this.repository.findOne({ where: { username } })
            return UserMapper(user)
        } catch (error) {
            console.log(error)
        }

    }

    async list(pagination: IPagination): Promise<UserDto[]> {
        try {
            const users = await this.repository.find({
                select: ['id', 'firstname', 'lastname', 'date_of_birth', 'email', 'active', 'created_at', 'username', 'profile_image'],
                skip: pagination.skip ? pagination.skip : null,
                take: pagination.limit ? pagination.limit : null,
                order: pagination.orderBy ? { [pagination.orderBy]: pagination.orderType } : null,
            })

            return users;
        } catch (error) {
            console.log(error)
        }
    }

    async create(user: UserDto): Promise<UserDto> {
        try {
            user.active = false;
            const createdUser = this.repository.create(user);
            const newUser = await this.repository.save(createdUser)

            return UserMapper(newUser)
        } catch (error) {
            console.log(error)
        }

    }
}

export { UserRepository }
