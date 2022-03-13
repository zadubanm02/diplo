import {MigrationInterface, QueryRunner} from "typeorm";

export class newMigration21647194829902 implements MigrationInterface {
    name = 'newMigration21647194829902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item_model" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "rate" integer NOT NULL, CONSTRAINT "PK_06c774e30233aa439689561fd51" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item_model"`, undefined);
    }

}
