import { getRepository } from 'typeorm';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import Doctor from '../../models/Doctor';
import  jwt  from 'jsonwebtoken';


class Activate {
    public async verifyActivate(req:Request, res:Response, next:NextFunction){
        
        const { id } = req.params;

       
        const testeRepository = getRepository(Doctor);
        
        const doctor = await testeRepository.findOne(req.params.id);
        console.log(doctor)
        if(!doctor){
            return res.status(404).json({ message: "User not found" });
        }
        try {
            jwt.verify(doctor.token, 'secret', function(err, decode){
                console.log(err?.message)
                if(err?.message === 'jwt expired' && doctor.activate === 0){
                    
                    return res.status(400).json({ message: "Token expired" });

                }else{

                doctor.activate = 1;
                testeRepository.update(id,doctor);

            
                }
            
            })
        return res.status(200).json({ message: "Email successfully validated!" });
        } catch (error) {
            return res.status(400).json({message:  "Error server"});
        }
        
        
        
        

      

       // return res.status(200).json({ message: "Email successfully validated!" });
        
        
    }
}

export default new Activate();