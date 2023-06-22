import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1687458197967 implements MigrationInterface {
    name = 'CreateTable1687458197967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "compliments" ("id" uuid NOT NULL, "user_sender" uuid NOT NULL, "user_receiver" uuid NOT NULL, "tag_id" uuid NOT NULL, "message" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_c54299c9e1656922eb0045c246e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "compliments" ADD CONSTRAINT "FK_3e32d250792f1db0b4dde4bc90a" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compliments" ADD CONSTRAINT "FK_47922731571b285347daed32941" FOREIGN KEY ("user_receiver") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compliments" ADD CONSTRAINT "FK_cd4e6c54f85a02905a11897e91e" FOREIGN KEY ("user_sender") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compliments" DROP CONSTRAINT "FK_cd4e6c54f85a02905a11897e91e"`);
        await queryRunner.query(`ALTER TABLE "compliments" DROP CONSTRAINT "FK_47922731571b285347daed32941"`);
        await queryRunner.query(`ALTER TABLE "compliments" DROP CONSTRAINT "FK_3e32d250792f1db0b4dde4bc90a"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2023-06-21 18:10:44.032568'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2023-06-21 18:10:44.032568'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "updated_at" SET DEFAULT '2023-06-21 12:57:31.643539'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT '2023-06-21 12:57:31.643539'`);
        await queryRunner.query(`DROP TABLE "compliments"`);
    }

}
