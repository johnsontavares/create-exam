import { getCustomRepository, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import DoctorRepository from '../../repositorie/doctorRepositorie';
import Doctor from '../../models/Doctor';



class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {

    const showProfile = getCustomRepository(DoctorRepository);

    const user_id = request.userId;

    const user = await showProfile.findById(user_id);

    if (!user) {
      response.status(404).json({ message: 'this user does not exist' });
    }

    return response.json(user);
  }

  public async updateProfile(request: Request, response: Response):Promise<Response> {

    
    const {specialization, phone, phone2} = request.body;
    try {

    var regexPhone =  new RegExp("^[0-9]{11}");
    var regexPhone2 =  new RegExp("^[0-9]{11}");
  
    if(!regexPhone2.test(phone2)&&(phone2.length != "") ){
            
      return response.status(404).json({ message: "Invalid phone2" }); 
    }
         
    if(!regexPhone.test(phone) ){
        console.log("back-end invalid phone")
      return response.status(404).json({ message: "Invalid phone1" }); 
    }
    const userDoc = await getRepository(Doctor).findOne(request.params.id);
    
    if(!userDoc){
      return response.status(404).json({message: "User not found"})
    }
    
    if(userDoc){
      const userRepository =  getRepository(Doctor);
      
      userDoc.phone = phone;
      userDoc.phone2 = phone2;
      userDoc.specialization = specialization;

      await userRepository.update(userDoc.id, userDoc);
      return response.status(200).json({message: "Profile edited successfully"})
    } 
    } catch (error) {
      return response.status(404).json({error})
    }
    
    return response.status(404).json({message: "User not found"})
  };
}

export default new ProfileController();