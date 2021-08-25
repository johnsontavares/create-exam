import { EntityRepository, getRepository, Repository} from "typeorm"
import { new_user } from "../models/NewUser";





@EntityRepository(new_user)
class UserRepository extends Repository<new_user>{

    public async findByCpf(cpf:string):Promise<new_user | undefined>{
        const user = await this.findOne({
            where:{
                cpf,
            },
        });
        return user;
    }
    public async findName(name:string):Promise<new_user | undefined>{
        const newUser = await this.findOne({
            where:{
                name,
            },
        });
        return newUser;
    }
    public async findId(id:string):Promise<new_user | undefined>{
        const newUser = await this.findOne({
            where:{
                id,
            },
        });
        return newUser;
    }
    
}

export default UserRepository;