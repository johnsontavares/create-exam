import { getCustomRepository, getRepository, useContainer } from 'typeorm';
import {Request, Response} from 'express';
import UserRepository from '../../../repositorie/useRepositorie';
import ExamStatusRepositorie from '../../../repositorie/examStatus';
import ExamUserRepositorie from '../../../repositorie/examCreate';
import { User } from '../../../models/User';
import ExameUserCreate from '../../../models/ExameUserCreate';
import { new_user } from '../../../models/NewUser';



class FindAllExamController{

    public async getAllExam(req:Request, res:Response): Promise<Response>{
        
        const allExams = await getRepository(User).find({relations:['status']});
        
        return res.json(allExams);
    }
    
}

export default new FindAllExamController();