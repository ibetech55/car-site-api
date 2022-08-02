import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AddTableImages1659319233144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'UUID',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'image_name',
                    type: 'VARCHAR(200)',
                    isNullable: false
                },
                {
                    name: 'image_type',
                    type: 'VARCHAR(50)',
                    isNullable: false
                },
                {
                    name: 'car_id',
                    type: 'UUID',
                    isNullable: true
                },
                {
                    name: 'user_id',
                    type: 'UUID',
                    isNullable: true
                },
                {
                    name: 'main_image',
                    type: 'BOOL',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'TIMESTAMP',
                    default: "NOW()",
                    isNullable: false,
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images")
    }


}
