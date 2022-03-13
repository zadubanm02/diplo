import {MigrationInterface, QueryRunner} from "typeorm";

export class newMigration21647197442062 implements MigrationInterface {
    name = 'newMigration21647197442062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_model" ADD "items" jsonb NOT NULL DEFAULT '[]'`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_model" DROP COLUMN "items"`, undefined);
    }

}
