import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateNewUser1627347575832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'new_user',
                columns:[
                {
                    name: 'name',
                    type:'varchar',
                },
                {
                    name: 'id',
                    type:'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'birth_date',
                    type: 'varchar'
                },
                {
                    name: 'phone1',
                    type: 'varchar'
                },
                {
                    name: 'phone2',
                    type: 'varchar'
                },
                {
                    name: 'gender',
                    type: 'varchar'
                },
                {
                    name: 'weight',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'height',
                    type: 'varchar'
                },
                {
                    name: 'cpf',
                    type: 'varchar'
                }
                ]
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {    
        await queryRunner.dropTable('new_user')
    }

}