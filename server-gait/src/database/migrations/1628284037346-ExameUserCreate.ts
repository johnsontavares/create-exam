import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ExameUserCreate1628284037346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'exameUserCreate',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                    
                },
                
                {
                    name:'name',
                    type:'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                  }
            ]
        }))

        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into('exameUserCreate')
        .values([
            {name: 'PENDING'},
            {name: 'CANCELED'},
            {name: 'COMPLETED'},
            {name: 'UNREALIZED'},
            {name: 'IN PROGRESS'},
        ])
        .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('exameUserCreate');
    }

}
