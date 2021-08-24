import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Justification1622221208875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'justification',
                columns:[
                    {
                        name: 'id',
                        type:'uuid',
                        isPrimary:true,
                        generationStrategy:'uuid',
                        default:"uuid_generate_v4()",
                    },
                    {
                        name:'name',
                        type:'varchar'
                    },
                    {
                        name:'description',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type: 'timestamp',
                        default:'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('justification');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
