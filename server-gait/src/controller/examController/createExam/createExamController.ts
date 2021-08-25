import { getCustomRepository, getRepository, useContainer } from 'typeorm';
import {Request, Response} from 'express';
import UserRepository from '../../../repositorie/useRepositorie';
import ExamStatusRepositorie from '../../../repositorie/examStatus';
import ExamUserRepositorie from '../../../repositorie/examCreate';
import ExameUserCreate from '../../../models/ExameUserCreate';



class Create_Exam_Controller{

    public async create_Exam(req:Request, res:Response){
        const examRepositorie = getCustomRepository(ExamUserRepositorie)
        const exameStatus = getCustomRepository(ExamStatusRepositorie);
        const userRepository = getCustomRepository(UserRepository);

        const {name,examDate,email,examDuration,examDescription} = req.body;
        const id = 5;
        //const userExists = await newUserRepositorie.findOne({where:{userRelationId}})
        //console.log("UserExists>>>",userExists?.id);
        const statusExists = await exameStatus.findOne({where:{id}});
        const userExists = await userRepository.findName(name)

        if(!userExists){
            return res.status(404).json({message:"User not found!"})
        }

        const exameCreate = examRepositorie.create({
            name,
            examDate,
            email,
            examDescription,
            examDuration,
            status:statusExists,
            userId:userExists
        })
        
        const result = await examRepositorie.save(exameCreate);
        
        return res.status(201).json(result)

    }
    
    public async getAllStatus(req:Request, res:Response): Promise<Response>{
        
        const allExams = await getRepository(ExameUserCreate).find();
        
        return res.json(allExams);
    }
}

export default new Create_Exam_Controller();