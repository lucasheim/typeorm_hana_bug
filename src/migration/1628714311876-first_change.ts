import { MigrationInterface, QueryRunner } from "typeorm";

export class firstChange1628714311876 implements MigrationInterface {
  name = "firstChange1628714311876";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer GENERATED ALWAYS AS IDENTITY, "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
