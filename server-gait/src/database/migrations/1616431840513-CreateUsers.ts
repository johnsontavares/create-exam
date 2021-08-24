import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1616431840513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'examCreate',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'status',
                        type: 'varchar'
                    },
                    {
                        name: 'userId',
                        type: 'varchar'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'examDate',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'examDuration',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'examDescription',
                        type: 'varchar',
                        isNullable: false,
                    },
                ],
            
            })
        );
    }

    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('examCreate');
    }

}