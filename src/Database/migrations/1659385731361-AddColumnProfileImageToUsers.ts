import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddColumnProfileImageToUsers1659385731361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "profile_image",
            type: 'VARCHAR(200)',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'profile_image')
    }
}
