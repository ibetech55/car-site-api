import { CarsDto } from "../Dtos";
import { BrandMapper } from "./brand.mapper";
import { ModelMapper } from "./model.mapper";
import { UserMapper } from "./user.mapper";

export const CarMapper = (Car: CarsDto): CarsDto => {
  return {
    id: Car?.id,
    user_id: Car?.user_id,
    users: UserMapper(Car?.users),
    brands: BrandMapper(Car?.brands),
    models: ModelMapper(Car?.models)
  }
}
