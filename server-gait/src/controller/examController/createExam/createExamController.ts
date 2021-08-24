import { getCustomRepository, getRepository, useContainer } from 'typeorm';
import {Request, Response} from 'express';
import UserRepository from '../../../repositorie/useRepositorie';
import ExamStatusRepositorie from '../../../repositorie/examStatus';
import ExamUserRepositorie from '../../../repositorie/examCreate';
import { User } from '../../../models/User';
import ExameUserCreate from '../../../models/ExameUserCreate';
import { new_user } from '../../../models/NewUser';
import examCreate from '../../../repositorie/examCreate';



class Create_Exam_Controller{

    public async create_Exam(req:Request, res:Response){
        const examRepositorie = getCustomRepository(ExamUserRepositorie)
        const exameStatus = getCustomRepository(ExamStatusRepositorie);
        const userRepository = getCustomRepository(UserRepository);

        const {name,examDate,email,examDuration,examDescription} = req.body;

        var regexDate = new RegExp("^([0-9]{2})(\/)([0-9]{2})(\/)([0-9]{4})$")
        var validateName =  /\s\s/g.test(name);   
        console.log(email)
        
        if(examDescription.length > 320){
            console.log("passou do limite! ")
            return res.status(404).json({message: "Invalid description"})

        }

        if(validateName || name.length > 50){
            return res.status(404).json({message: "Invalid name"})
        }
            // 28/08/2020
        if(!regexDate.test(examDate)){
            return res.status(404).json({message: "Invalid date format"})
        }
        // else{
        //     return res.status(200).json({message: "Valid date format"})
        // }

        if(!regexDate.test(examDate)){
            return res.status(404).json({message: "Invalid date format"})

        }
        if(examDuration.length > 6){
            return res.status(404).json({message: "Invalid duration format"})

        }

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

    public async getExamData(req: Request, res: Response){
        const ExamData = await getCustomRepository(ExamUserRepositorie)
        // findOne(req.params.id) 
        const{name} = req.params;
        const userExams = await ExamData.find({name}) 
        return res.json(userExams)

    }

    public async updateExam(request: Request, response:Response){
        const {examDate, examDuration, examDescription} = request.body

        try{

        const exam = await getRepository(User).findOne(request.params.id)

        // const examRepository = getRepository(examCreate)

        if(exam){
            const examRepository = getRepository(User)

            exam.examDate = examDate
            exam.examDescription = examDescription
            exam.examDuration =  examDuration

            await examRepository.update(exam.id, exam)
            return response.status(200).json({message: "Exam edited successfully"})

        }else{
            return response.status(404).json({message: "Exam not found"})
          }
     } catch (error) {
        return response.status(404).json({error})
      }
      return response.status(404).json({message: "Exam not found"})

        // await examRepository.update(exam.id, exam)
    }
}

export default new Create_Exam_Controller();