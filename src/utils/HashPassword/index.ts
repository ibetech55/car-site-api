import bcrypt from 'bcryptjs';

export class Hashpassword {
  constructor() {

  }

  GeneratePassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)
    return hash
  }

  DecryptPassword(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword)
  }
}
