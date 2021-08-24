import { Request, Response } from 'express';
import { getRepository, getCustomRepository } from "typeorm";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import DoctorRepository from '../../repositorie/doctorRepositorie';


class LoginDoctorController {
    public async signInDoctor(req: Request, res: Response) {
        const repo = getCustomRepository(DoctorRepository);

        var regexEmail = new RegExp("^[a-zA-Z0-9]+[@]+[a-zA-Z0-9]+.com$")

        const { email, password } = req.body;
        
        console.log(">>>>>>>>>email", email);
        const doctor = await repo.findByEmail(email);
        if (!doctor) {
            return res.status(404).json({ message: "Email not registered in the system" });
        }
        /*if(!(regexEmail).test(email)){
            return res.status(404).json({message:'Invalid email'});
        }*/
        console.log("2 - >>>>>>>>>email", email);
        if (!doctor.password) {
            return res.status(404).json({ message: "Inactive or invalid password" });
        }
        if (doctor.activate === 0) {
            return res.status(404).json({ message: "Your profile has been inactivated, please reset your password to reactivate your profile" });
        }
    
        const isValidatePassword = await bcrypt.compare(password, doctor.password as string);

        if (!isValidatePassword) {
            return res.status(401).json({ message: "Incorrect email or password"  });
        }
        
        const token = jwt.sign({ id: doctor.id }, 'secret', { expiresIn: '1d' });


        return res.json({
            doctor,
            message: "Ok",
            token
        });


    }
}
export default new LoginDoctorController();