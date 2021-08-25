import { Router } from 'express';
import Create_User_Controller from '../controller/userController/createUser/createUserController';


const routes = Router();
routes.post('/new-user', Create_User_Controller.create_new_user);
routes.get('/new-user/:cpf' ,Create_User_Controller.findByCpf);
routes.get('/allUsers/' ,Create_User_Controller.getAllUsers);
routes.get('/findExamUserId/:userId' ,Create_User_Controller.findExamUserId);
export default routes;