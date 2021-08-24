import { Router } from 'express';
import  CancelExamController  from '../controller/examController/cancelExam/cancelExamController';
import Create_Exam_Controller from '../controller/examController/createExam/createExamController';
import FindExamController from '../controller/examController/findExamId/findExamIdController'
import FindAllExamsCreateController from '../controller/examController/findAllExame/findAllExamController';
const routes = Router()

routes.put('/examUserId/:idExam', CancelExamController.cancelExam);
routes.post('/createExam', Create_Exam_Controller.create_Exam);
routes.get('/getAllStatus/', Create_Exam_Controller.getAllStatus);
routes.get('/findExamId/:id', FindExamController.findExambyId);
routes.get('/allExamesCreate/', FindAllExamsCreateController.getAllExam);

routes.get('/createExam/:name', Create_Exam_Controller.getExamData)
routes.put("/updateExam/:id", Create_Exam_Controller.updateExam)

export default routes;