import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import ExameUserCreate from './ExameUserCreate';
import { new_user } from "./NewUser";




@Entity('examCreate')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    examDate: string;

    @ManyToOne(() => ExameUserCreate, statuscreate =>statuscreate.id, {eager:true})
    status:ExameUserCreate;
    
    @Column()
    email: string;

    @ManyToOne(() => new_user, userId => userId.id, {eager:true})
    userId: new_user;

    @Column()
    examDuration: string;


    @Column()
    examDescription: string;
}
