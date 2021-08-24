import { getCustomRepository, getRepository } from "typeorm";
import DoctorRepository from "../../repositorie/doctorRepositorie";
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import Doctor from "../../models/Doctor";


class ForgotDoctorPassword {

    public async forgotDoctorPassword(req: Request, res: Response) {
        const doctorRepository = getCustomRepository(DoctorRepository);

        const { email } = req.body;
        
        console.log(">>>>>>>>>>>>>forgotpassword",email)
        try {

            const user = await doctorRepository.findByEmail(email);
            if(!user){
                return res.status(404).json({ message: "Invalid Domain" })
            }
            
            var transport = nodemailer.createTransport({
                host: 'smtp.mailtrap.io',
                port: 2525,
                auth: {
                    user: "0be89881ec1c58",
                    pass: "f2fa7550b78068"
                }
            });

            const id = user.id  
            const url = `http://localhost:3000/confirmPassword/${id}`
            
            const mailOptions = {
                from: 'Testando <92fe25ba83-325b9d@inbox.mailtrap.io>',
                to: email,
                subject: 'Password recovery',
                html: `To reset your password click on the link => <a href="${url}">${url}</a>`
              }
            transport.sendMail(mailOptions, function(error, info){
                if(error){
                    return res.status(400).json({ message: "Failed to send message" });
                }else{
                    return res.status(200).json({ message: "Email not registeredWe send an email with the password reset link to the registered email, access your email to change the password!" });
                }
            }    
            )
        } catch (error) {
            return res.status(404).json({ message: "Email not registered" });
        }
    }
    public async passwordUpdate(req:Request, res:Response){
        
        try {
        const { password } = req.body;

        var regexPassword = new RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,13}$");
        if(!regexPassword.test(password)){
            res.status(404).json({ message: "Invalid Password" });
             
        }
        if(password.length < 6){
            return res.status(400).json({ message: "Minimum password of 6 characters" });
        }
        if(password.length > 13){
            return res.status(400).json({ message: "Maximum password of 13 characters" });
        }


        const user = await getRepository(Doctor).findOne(req.params.id);
        
        if(!user){
            return res.status(404).json({message:'This user does not exist in the system.'})
        }
        const isValidatePassword = await bcrypt.compare(password, user.password as string)
        if(isValidatePassword){
            return res.status(404).json({message:'Cannot use old password'})
        }
        if(user.activate === 0){
            user.activate = 1;
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHashed = await bcrypt.hash(password, salt);
        
        
        user.password = passwordHashed;

        
        //const results = await getRepository(Doctor).save(user);
        const results = await getRepository(Doctor).update(user.id, user);
        return res.json(results);
        } catch (error) {
            
        }
            
        
    } 
}

export default new ForgotDoctorPassword();