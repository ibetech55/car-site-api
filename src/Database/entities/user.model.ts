import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Cars } from "./car.model";
import { Auth } from "./auth.model";
import { Images } from "./image.model";

@Entity("users")
class Users {

    @PrimaryColumn()
    id?: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    date_of_birth: Date;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @Column()
    password: string;

    @Column()
    access_code: string;

    @Column()
    profile_image: string;

    @OneToMany(type => Cars, cars => cars.users)
    cars: Cars[]

    @OneToMany(type => Auth, auth => auth.users)
    auth: Auth[]

    @OneToOne(type => Images, image => image.cars)
    images: Images[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Users }
