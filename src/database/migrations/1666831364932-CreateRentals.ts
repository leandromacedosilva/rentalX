// importar a função

import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class CreateRentals1666831364932 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "retals",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "start_date",
                        type: "date",
                    },
                    {
                        name: "end_date",
                        type: "date",
                    },
                    {
                        name: "expected_return_date",
                        type: "date",
                    },
                    {
                        name: "total",
                        type: "number",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rentals");
    }
}
