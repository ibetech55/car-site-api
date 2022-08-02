import { v4 as uuid } from "uuid";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, OneToMany, CreateDateColumn, OneToOne } from "typeorm";
import { Cars } from "./car.model";
import { Users } from "./user.model";

@Entity("images")
class Images {

    @PrimaryColumn()
    id?: string;

    @Column()
    image_name: string;

    @Column()
    car_id: string;

    @Column()
    user_id: string;

    @Column()
    main_image: boolean;

    @Column()
    image_type: string;

    @CreateDateColumn()
    created_at: Date;


    @OneToOne(type => Users, users => users.images)
    users: Users

    @OneToOne(type => Cars, cars => cars.images)
    @JoinColumn({ name: "car_id" })
    cars: Cars

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Images }
