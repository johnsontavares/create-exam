import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import DoctorRepository from '../repositorie/doctorRepositorie';
/*import UserRepository from '../repositorie/userRepositorie';*/

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization;

    if (!token) return res.status(404).json({ message: 'Does not have toke' });


    try {

        const data = jwt.decode(token)
        const { id } = data as TokenPayload;

        req.userId = id;

        return next();


    } catch (error) {
        res.status(401).json({message:'Erro ', error});
    }


    /*const decode = jwt.decode(token);

    var userId = decode
    var chave = (userId)
    
*/

};
/*

export const isDoctor = async (req: Request, res: Response, next: NextFunction) => {
    const doctorRepository = getCustomRepository(DoctorRepository);
    const id = req.userId;

    /*const doc = await doctorRepository.findOne({ where: { id } })
    if (doc?.role === "doctor") {
        next();
        return;
    }
    return res.status(401).json({ message: 'Você não possui permissão de administrador' });
}*/
/*export const isUser = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = getCustomRepository(UserRepository);
    const id = req.userId;

    const user = await userRepository.findOne({ where: { id } })
    if (user?.role === "user") {
        next();
        return;
    }
    return res.status(401).json({ message: 'Você não possui permissão' });
}

*/




