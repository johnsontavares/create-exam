import {Request, Response} from 'express';
import { getCustomRepository, getRepository, RelationId } from 'typeorm';
import { User } from '../../../models/User';
import ExamStatusRepositorie from '../../../repositorie/examStatus';



class FindExamController{

    public async findExambyId(req:Request, res:Response){

        const {id} = req.params;
        
        const examRepositorie = getRepository(User);
 
       const nome = await examRepositorie.findOne(
           id,
           {relations:['status']}
           );
        return res.status(200).json(nome);
        
    }
    public async show(req:Request, res:Response){

       //{relations:['status']}
        const allExams = await getRepository(User).find({relations:['status']});
        console.log(">>>>>>>>>>>>>>",allExams)
        return res.json(allExams);
    }
}

export default new FindExamController();