import { CarsDto } from "../../dtos";
import { IPagination } from "../../utils/Pagination";


export interface ICarRepository {
  list(pagination: IPagination): Promise<CarsDto[]>;
  create(data: CarsDto): Promise<CarsDto>;
  getCarById(id: string): Promise<CarsDto>
  update(id: string, data: CarsDto): Promise<Boolean>
  delete(id: string): Promise<Boolean>
}

