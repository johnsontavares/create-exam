import { getRepository } from 'typeorm';
import {Request, Response} from 'express';
import Justification from '../../models/Justification';


class JustificationController{

    public async createJustification(req:Request, res:Response){
        const justificationRepositorie = getRepository(Justification);
        const {name, description} = req.body;
       console.log(name)
        
       const n = Object.keys(name).length === 0;
       if(n === true && description === ''){
        return res.status(404).json({message:'Please select at least one option'});
       }
        const justification = justificationRepositorie.create({
            name,
            description
        });
        await justificationRepositorie.save(justification);
        return res.status(201).json({message:'Justification sent'});
    }
}
export default new JustificationController();