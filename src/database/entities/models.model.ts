import { v4 as uuid } from "uuid";
import { Column, Entity, PrimaryColumn, OneToMany, JoinColumn } from "typeorm";
import { Brands } from "./brand.model";
import { Cars } from "./car.model";

@Entity("models")
class Models {

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  brand_id: string;

  @OneToMany(type => Cars, cars => cars.brands)
  cars: Cars[]

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Models }
