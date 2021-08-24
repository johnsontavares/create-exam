import {Request, Response} from 'express';
import { getCustomRepository, getRepository, RelationId } from 'typeorm';
import { User } from '../../../models/User';
import ExamStatusRepositorie from '../../../repositorie/examStatus';



class CancelExamController{

    public async cancelExam(req:Request, res:Response){
        const testeRepository = getRepository(User);
        const exameStatus = getCustomRepository(ExamStatusRepositorie);
        const {idExam} = req.params;
        const { id } = req.body;
        const statusExists = await exameStatus.findOne({where:{id}});
        const ExamUser = await testeRepository.findOne(req.params.idExam);
        if(!ExamUser){
            return res.status(404).json({ message: "Not found" });
        }
        const exameCreate = testeRepository.create({ status:statusExists});
        
        await testeRepository.update(idExam, exameCreate);
       
        return res.status(200).json({message:'Update success'})
    }
}

export default new CancelExamController();