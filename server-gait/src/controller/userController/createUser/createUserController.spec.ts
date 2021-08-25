import { createConnections, getCustomRepository, getRepository } from 'typeorm';
import ExameUserCreate from '../../../models/ExameUserCreate';
import ExamUserRepositorie from '../../../repositorie/examCreate';

interface IUserRequest {
    name  : string
    birth_date : string
    phone1 : string
    phone2 : string
    gender : string
    weight : string
    height : string
    email : string
    cpf : string
  }

describe("Create user",() => {
    beforeAll(async () => {
        await createConnections()
      })
    it("should be able o create a new user", async() =>{

        const examRepositorie =  getRepository("new_user")

        const userData = examRepositorie.create({
            name : "Johnson2",
            birth_date : "27/06/1921",
            phone1: "(92)99417-7113",
            phone2: "(92)99417-9963",
            gender: "Male",
            weight: "65",
            height: "2 m",
            email:"fulano2@gmail.com",
            cpf:"016.504.452-70"
        } )as IUserRequest

        // const examRepositorie =  getRepository("new_user")
        
        const results = await examRepositorie.save(userData)
        expect(results).toHaveProperty("phone1")
        expect(results).toHaveProperty("id")
        expect(results.name).toBe("Johnson2")
        expect(results.birth_date).toBe("27/06/1921")
    })
})