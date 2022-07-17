import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AddTableBrands1657889862161 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'brands',
      columns: [
        {
          name: 'id',
          type: 'UUID',
          isPrimary: true,
          isNullable: false
        },
        {
          name: 'name',
          type: 'varchar(50)',
          isNullable: false,
        },
        {
          name: 'origin',
          type: 'varchar(50)',
          isNullable: true,
        },
      ]
    }))
    await queryRunner.createTable(new Table({
      name: 'models',
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
          isNullable: false
        },
        {
          name: 'name',
          type: 'varchar(50)',
          isNullable: false,
        },
        {
          name: 'type',
          type: 'varchar(50)',
          isNullable: true,
        }
      ],
      foreignKeys: [
        {
          referencedTableName: 'brands',
          referencedColumnNames: ['id'],
          columnNames: ['brand_id']
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('brands')
    await queryRunner.dropTable('models')
  }
}
