import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail,  MaxLength,} from 'class-validator';
export type UserRoleType = "admin" | "doctor" | "user";

@Entity('doctors')
class Doctor {


    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    token: string;

    @Column({type: 'text',
    unique: true,
    nullable: true})
    @IsEmail()
    email: string;

    @Column()
    @MaxLength(50)
    name: string;

    @Column()
    cpf: string;

    @Column()
    crm: string;

    @Column()
    password?: string;

    @Column()
    activate:number;

    @Column()
    phone: string;
    
    @Column('text', {nullable: true})
    phone2: string;

    @Column({
    nullable:false
    })
    specialization: string;


    @Column({
        type: "enum",
        enum: ["admin", "doctor", "user"],
        default: "doctor"
    })
    role: UserRoleType


    @CreateDateColumn()
    created_at: Date;


}
export default Doctor;


