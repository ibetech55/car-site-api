import { query } from "express"
import { MigrationInterface, QueryRunner } from "typeorm"

export class ChangeColumnTokenType1658231975661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(' ALTER TABLE auth ALTER COLUMN token TYPE character varying;')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(' ALTER TABLE auth ALTER COLUMN token TYPE character varying;')
    }

}
