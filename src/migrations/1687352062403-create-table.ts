import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1687352062403 implements MigrationInterface {
    name = 'CreateTable1687352062403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-06-21 10:35:58.91364'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-06-21 10:35:58.91364'`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
