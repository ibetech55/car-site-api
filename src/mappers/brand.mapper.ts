import { BrandDto } from "../dtos";

export const BrandMapper = (Brand: BrandDto): BrandDto => {
  return {
    id: Brand?.id,
    name: Brand?.name,
    origin: Brand?.origin
  }
}
