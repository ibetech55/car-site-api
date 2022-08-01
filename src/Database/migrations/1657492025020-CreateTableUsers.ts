import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableUsers1657492025020 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isNullable: false
        },
        {
          name: 'firstname',
          type: 'varchar(100)',
          isNullable: false,
        },
        {
          name: 'lastname',
          type: 'varchar(100)',
          isNullable: false,
        },
        {
          name: 'date_of_birth',
          type: 'DATE',
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar(100)',
          isNullable: false,
        },
        {
          name: 'username',
          type: 'varchar(100)',
          isNullable: false,
        },
        {
          name: 'active',
          type: 'bool',
          default: true,
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'TIMESTAMP',
          default: "NOW()",
          isNullable: false,
        },
        {
          name: "updated_at",
          type: 'TIMESTAMP',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }

}
