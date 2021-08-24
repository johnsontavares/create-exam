import { EntityRepository, Repository } from "typeorm";
import ExameUserCreate from "../models/ExameUserCreate";



@EntityRepository(ExameUserCreate)
class ExamStatusRepositorie extends Repository<ExameUserCreate>{

   
}

export default ExamStatusRepositorie;