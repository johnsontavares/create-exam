import JustificationController from '../controller/justificationController/justificationController';
import { verifyToken } from './../middlewares/authJWT';
import { Router } from 'express';

const routes = Router();

routes.post('/justification', [verifyToken], JustificationController.createJustification);

export default routes;