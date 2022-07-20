import { query } from "express"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAuthTable1658188273947 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'auth',
            columns: [
                {
                    name: 'id',
                    type: 'UUID',
                    isPrimary: true,
                },
                {
                    name: "token",
                    type: 'UUID',
                    isNullable: false
                },
                {
                    name: "user_id",
                    type: 'UUID',
                    isNullable: false
                },
            ],
            foreignKeys: [
                {
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_id']
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('auth')
    }

}
