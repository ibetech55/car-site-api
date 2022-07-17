import { ModelDto } from "../Dtos";
import { BrandMapper } from "./brand.mapper";
import { UserMapper } from "./user.mapper";

export const ModelMapper = (Model: ModelDto): ModelDto => {
  return {
    id: Model?.id,
    name: Model.name,
    type: Model.type
  }
}
