import { v4 as uuid } from "uuid";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, OneToMany } from "typeorm";
import { Models } from "./models.model";
import { Users } from "./user.model";

@Entity("auth")
class Auth {

    @PrimaryColumn()
    id?: string;

    @Column()
    token: string;

    @Column()
    user_id: string;

    @ManyToOne(type => Users, users => users.auth)
    @JoinColumn({ name: 'user_id' })
    users: Users


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Auth }
