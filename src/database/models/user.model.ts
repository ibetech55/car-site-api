import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Users }
