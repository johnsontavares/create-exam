import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('exameUserCreate')
class ExameUserCreate{


    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name:String;
    
    
    @CreateDateColumn()
    created_at: Date;
    
}

export default ExameUserCreate;

