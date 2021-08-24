import { getRepository } from "typeorm";
import Doctor from "../../models/Doctor";
import { Request, Response } from 'express';

class EnableDoctorController {

    public async enable(req: Request, res: Response) {

        

        const testeRepository = getRepository(Doctor);

        const userRepository = await testeRepository.findOne(req.params.id);
        
        if (!userRepository) {
            return res.status(404).json({ message: "This user does not exist" });
        }

        userRepository.activate = 0;
        
        await testeRepository.update(userRepository.id, userRepository);

        return res.status(200).json({ message: "Account successfully disabled!" });
    }
}

export default new EnableDoctorController();