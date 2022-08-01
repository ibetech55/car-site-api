import { v4 as uuid } from "uuid";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, OneToMany } from "typeorm";
import { Models } from "./models.model";
import { Cars } from "./car.model";

@Entity("brands")
class Brands {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    origin: string;

    @OneToMany(type => Models, models => models.brands)
    models: Models[]

    @OneToMany(type => Cars, cars => cars.brands)
    cars: Cars[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Brands }
