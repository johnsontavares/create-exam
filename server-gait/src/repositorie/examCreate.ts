import { EntityRepository, Repository, getRepository, Like } from "typeorm";
import {User} from "../models/User";



@EntityRepository(User)
class ExamUserRepositorie extends Repository<User>{

    public async findByName(name:string):Promise<User | undefined>{
        const user = await this.findOne({            
            where:{name,},
        });
        return user;
    }
    public async findById(id:string):Promise<User | undefined>{
        const user = await this.findOne({
            where:{
                id,
            },
        });
        return user;
    }
    public async findByIdName(name:string):Promise<User[] | undefined>{
        const user = await  getRepository(User);
        
        return user.find({
            name: Like(`%${name}%`),
        });
    }
}

export default ExamUserRepositorie;