import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Models } from "./models.model";
import { Brands } from "./brand.model";
import { Users } from "./user.model";
import { Images } from "./image.model";

@Entity("cars")
class Cars {

    @PrimaryColumn()
    id?: string;

    @Column()
    brand_id: string;

    @Column()
    user_id: string;

    @Column()
    model_id: string;

    @Column()
    year: number;

    @Column()
    mileage: number;

    @Column()
    price: number;

    @Column()
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @ManyToOne(type => Users, users => users.cars)
    @JoinColumn({ name: 'user_id' })
    users: Users

    @ManyToOne(type => Brands, brands => brands.cars)
    @JoinColumn({ name: 'brand_id' })
    brands: Brands

    @ManyToOne(type => Models, models => models.cars)
    @JoinColumn({ name: 'model_id' })
    models: Models

    @OneToMany(type => Images, images => images.cars)
    images: Images[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Cars }
