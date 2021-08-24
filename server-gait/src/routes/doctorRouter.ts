import { Router } from 'express';
import { verifyToken } from '../middlewares/authJWT';
import CreateDoctorController from '../controller/doctorController/createDoctor';
import LoginDoctorController from '../controller/doctorController/loginDoctor';
import Activate from '../controller/doctorController/Activate';
import ProfileController from '../controller/doctorController/ProfileController';
import AllUsers from '../controller/doctorController/getAllUsers';
import ForgotePassword from '../controller/doctorController/forgotPasswordDoctor';
import EnableDoctorController from '../controller/doctorController/enableDoctor';
import SendEmail from '../controller/doctorController/sendEmailController';




const routes = Router();
routes.post('/doctorSignUp', CreateDoctorController.createDoctor);
routes.get('/activate/:id',Activate.verifyActivate);
routes.get('/allUser',AllUsers.getAll);
routes.get('/userId/:id',AllUsers.getUserId);
routes.post('/signInDoctor', LoginDoctorController.signInDoctor);
routes.get('/showProfile', [verifyToken], ProfileController.show);
routes.put('/updateUser/:id', [verifyToken],ProfileController.updateProfile);
routes.put('/updatePassword/:id', ForgotePassword.passwordUpdate);
routes.put('/enable/:id',[verifyToken],EnableDoctorController.enable);
routes.post('/emailUpdate', ForgotePassword.forgotDoctorPassword);
routes.put('/updateMailSend/:id', SendEmail.updateEmail);
routes.post('/findEmail/', SendEmail.findEmail);
routes.post('/verifyUser', AllUsers.getUser);
routes.post('/sendEmailController', SendEmail.sendEmail);
routes.post('/sendToken', AllUsers.sendToken);
routes.get('/profilePerfil/:id', AllUsers.getUserData);
export default routes;