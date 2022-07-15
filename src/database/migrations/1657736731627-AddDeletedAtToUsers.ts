import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddDeletedAtToUsers1657736731627 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'deleted_at',
      type: 'TIMESTAMP',
      isNullable: true
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'deleted_at')
  }

}
