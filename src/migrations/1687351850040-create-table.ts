import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1687351850040 implements MigrationInterface {
    name = 'CreateTable1687351850040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-06-21 10:35:58.91364'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-06-21 10:35:58.91364'`);
    }

}
