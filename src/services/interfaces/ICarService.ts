import { CarsDto } from "../../dtos";
import { IPagination } from "../../utils/Pagination";

interface ICarService {
  getCars(Pagination: IPagination): Promise<CarsDto[]>;
  createCar(data: CarsDto): Promise<CarsDto>;
  getCar(id: string): Promise<CarsDto>;
  updateCar(id: string, data: CarsDto): Promise<Boolean>
  deleteCar(id: string): Promise<String>
}

export { ICarService }
