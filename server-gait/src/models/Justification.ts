import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('justification')
class Justification{

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @CreateDateColumn()
    created_at:Date;
}

export default Justification;