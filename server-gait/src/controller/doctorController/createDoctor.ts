import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ApiCrm from '../../Api/api';
import DoctorRepository from '../../repositorie/doctorRepositorie';
import { validate } from 'class-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class CreateDoctorController {
    

    public async createDoctor(req: Request, res: Response) {
        const doctorRepository = getCustomRepository(DoctorRepository);

        const {
            name,
            email,
            password,
            cpf,
            specialization,
            crm,
            phone,
            phone2,
        } = req.body;

        
        
        try {
           
            
            const emailExists = await doctorRepository.findByEmail(email);

            if (emailExists) {
                return res.status(409).json({ message: "Email already registered in the system" });
            }
            const nameExists = await doctorRepository.findByName(name);
            if (nameExists) {
                return res.status(409).json({ message: "This user already exists" });
            }
            const cpfExists = await doctorRepository.findByName(cpf);
            if (cpfExists) {
                return res.status(409).json({ message: "Cpf is already in use on another profile" });
            }
            const crmExists =await doctorRepository.findOne({
                where:{crm}
            })
            if(crmExists){
                return res.status(409).json({ message: "CRM is already in use on another profile" });
            }
            
        const situacao = ApiCrm.getName(name);
            
        const salt = await bcrypt.genSalt(1);
        const passwordHashed = await bcrypt.hash(password, salt);
        const token = jwt.sign({ id: salt }, 'secret', { expiresIn: 300 });//5minutos

         situacao.then(async function (response)   {
            if (response === 'Ativo') {

    
        const doctor =  doctorRepository.create({
            name,
            email,
            password:passwordHashed,
            cpf,
            crm,
            specialization,
            token: token,
            activate: 0,
            phone,
            phone2,
            
        });

        
        const errors =  await validate(doctor);
        if(errors.length > 0){      
            return res.status(400).json({message: errors.map(v => v.constraints)});    
        }
        doctorRepository.save(doctor);
        

       
            
        return res.status(201).json({ message: 'Successfully created doctor!' });
        }
            return res.status(401).json({ message: 'It was not possible to continue your registration, check your situation with the CRM' });
        })
        } catch (error) {
            console.log("Sorry, we can't register user: "+error);
        }       

    }

}
export default new CreateDoctorController();


