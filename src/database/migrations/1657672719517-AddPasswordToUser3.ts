import { MigrationInterface, QueryRunner } from "typeorm"

export class AddPasswordToUser31657672719517 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD COLUMN password VARCHAR(400);`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN password"`,
    ) // reverts things made in "up" method
  }

}
