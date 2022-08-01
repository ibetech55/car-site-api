import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddColumnAccessCodeToUser1658715347128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'access_code',
            type: 'VARCHAR(6)',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'access_code')
    }

}
