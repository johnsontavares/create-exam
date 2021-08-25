import { getRepository, getCustomRepository } from 'typeorm';
import e, {Request, Response} from 'express';
import {new_user} from '../../../models/NewUser'
import  UserRepository from '../../../repositorie/useRepositorie';
import { User } from '../../../models/User';
import ExamUserRepositorie from '../../../repositorie/examCreate';

class Create_User_Controller{

    public async create_new_user(req:Request, res:Response){
        const examRepositorie =  getRepository("new_user")


        const user = await examRepositorie.create(req.body)
        
       
        const results = await examRepositorie.save(user)
        return res.send(results)

    }

    public async get_data(req:Request, res:Response): Promise<Response>{
        const UserData = await getRepository(new_user).findOne(req.params.id)
        return res.json(UserData)
    }

    public async findByCpf(req:Request, res:Response, ):Promise<Response>{
        const user = await getCustomRepository(UserRepository)
        const {cpf} = req.params;
        const userData = await user.findByCpf(cpf)
        console.log(userData)
        return res.json(userData);
    } 


    public async getAllUsers(req:Request, res:Response, ):Promise<Response>{
        const allExams = await getRepository(new_user).find()
        
        return res.json(allExams);
    } 
    public async findExamUserId(req:Request, res:Response){
        const getExamsRepositorie = getRepository(User);
        //{relations:['status']}
        const { userId } = req.params 
        const allResults = await getExamsRepositorie.findAndCount({where: {userId}})
        
        console.log(">>>>>>>>>>>>", allResults)
         
         return res.json(allResults);
     }
}

export default new Create_User_Controller();