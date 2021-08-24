import { EntityRepository, Repository } from "typeorm";
import AllExamsAllUsers from "../models/AllExamsUsers";




@EntityRepository(AllExamsAllUsers)
class ExamAllUsersRepositorie extends Repository<AllExamsAllUsers>{

   
}

export default ExamAllUsersRepositorie;