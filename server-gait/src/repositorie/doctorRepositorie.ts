import { EntityRepository, Repository } from "typeorm";
import Doctor from "../models/Doctor";



  

@EntityRepository(Doctor)
class DoctorRepository extends Repository<Doctor>{

    public async findByName(name:string):Promise<Doctor | undefined>{
        const doctor = await this.findOne({
            where:{
                name,
            },
        });
        return doctor;
    }

    public async findById(id:string):Promise<Doctor | undefined>{
        const doctor = await this.findOne({
            where:{
                id,
            },
        });
        return doctor;
    }

    public async findByEmail(email:string):Promise<Doctor | undefined>{
        const doctor = await this.findOne({
            where:{
                email,
            },
        });
        return doctor;
    }
    public async findByCpf(cpf:string):Promise<Doctor | undefined>{
        const doctor = await this.findOne({
            where:{
                cpf,
            },
        });
        return doctor;
    }
    public async findByPhone(phone:string):Promise<Doctor | undefined>{
        const doctor = await this.findOne({
            where:{
                phone,
            },
        });
        return doctor;
    }
    public async findByPhone2(phone2:string):Promise<Doctor | undefined>{
        const doctor = await this.findOne({
            where:{
                phone2,
            },
        });
        return doctor;
    }
    public async findByCrm(crm:string):Promise<Doctor | undefined>{
        const doctor = await this.findOne({
            where:{
                crm,
            },
        });
        return doctor;
    }
}

export default DoctorRepository;