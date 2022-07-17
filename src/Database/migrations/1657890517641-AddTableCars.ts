import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AddTableCars1657890517641 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'cars',
      columns: [
        {
          name: 'id',
          type: 'UUID',
          isPrimary: true,
          isNullable: false
        },
        {
          name: 'brand_id',
          type: 'UUID',
          isNullable: false,
        },
        {
          name: 'model_id',
          type: 'UUID',
          isNullable: false,
        },
        {
          name: 'user_id',
          type: 'UUID',
          isNullable: false,
        },
        {
          name: 'year',
          type: 'INT',
          isNullable: true,
        },
        {
          name: 'mileage',
          type: 'INT',
          isNullable: true,
        },
        {
          name: 'price',
          type: 'INT',
          isNullable: true,
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
        },
        {
          name: "deleted_at",
          type: 'TIMESTAMP',
        }
      ],
      foreignKeys: [
        {
          referencedTableName: 'brands',
          referencedColumnNames: ['id'],
          columnNames: ['brand_id']
        },
        {
          referencedTableName: 'models',
          referencedColumnNames: ['id'],
          columnNames: ['model_id']
        },
        {
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          columnNames: ['user_id']
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cars")
  }
}
