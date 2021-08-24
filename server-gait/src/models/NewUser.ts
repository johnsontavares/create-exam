import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity('new_user')
export class new_user {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone1: string;

    @Column()
    phone2: string;

    @Column()
    gender: string;

    @Column()
    weight: string;

    @Column()
    height: string;

    @Column()
    cpf: string;

    @Column()
    birth_date: string;

}
