import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Users }
