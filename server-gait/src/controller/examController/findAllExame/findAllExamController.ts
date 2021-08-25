import { getCustomRepository, getRepository} from 'typeorm';
import {json, Request, Response} from 'express';
import { User } from '../../../models/User';
import ExamUserRepositorie from '../../../repositorie/examCreate';
import AppError from '../../../error/AppError';




class FindAllExamController{

    public async getAllExam(req:Request, res:Response): Promise<Response>{
        
        const allExams = await getRepository(User).find({relations:['status']});
        
        return res.json(allExams);
    }

    public async getNameExam(req:Request, res:Response): Promise<Response>{

        const examRepositorie = await getCustomRepository(ExamUserRepositorie);

        const {name} = req.body;

       
            
        const result = await examRepositorie.findByIdName(name?.toString());



        if(result?.length === 0){
            res.status(404).json({message: "User not found"})
        }
        
        return res.status(200).json({result})


    }
    
    
}

export default new FindAllExamController();