import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1687370740507 implements MigrationInterface {
    name = 'CreateTable1687370740507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "updated_at" SET DEFAULT '2023-06-21 12:57:31.643539'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT '2023-06-21 12:57:31.643539'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-06-21 10:35:58.91364'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-06-21 10:35:58.91364'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
