import { BrandDto } from "../brand";
import { ModelDto } from "../model";
import { UserDto } from "../users";

export interface CarsDto {
  id?: string;
  brand_id?: string;
  model_id?: string;
  user_id?: string;
  year?: number;
  mileage?: number;
  price?: number;
  active?: boolean;
  created_at?: Date;
  deleted_at?: Date;
  updated_at?: Date;
  users?: UserDto;
  brands?: BrandDto
  models?: ModelDto
}
