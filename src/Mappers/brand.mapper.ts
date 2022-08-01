import { BrandDto } from "../Dtos";

export const BrandMapper = (Brand: BrandDto): BrandDto => {
  return {
    id: Brand?.id,
    name: Brand?.name,
    origin: Brand?.origin
  }
}
