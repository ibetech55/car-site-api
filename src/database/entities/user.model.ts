import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Cars } from "./car.model";

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

  @OneToMany(type => Cars, cars => cars.users)
  cars: Cars[]

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Users }
