import { EntityRepository, Repository } from "typeorm";
import {User} from "../models/User";



@EntityRepository(User)
class ExamUserRepositorie extends Repository<User>{

    public async findByName(name:string):Promise<User | undefined>{
        const user = await this.findOne({
            where:{
                name,
            },
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

    public async findByUserId(userId: string): Promise<User | undefined>{
        const exams = await this.findOne({
            where:{
                userId
            }
        })
        return exams;
    }
}

export default ExamUserRepositorie;