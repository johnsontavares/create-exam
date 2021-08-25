import { createConnections, getCustomRepository } from 'typeorm';
import ExameUserCreate from '../../../models/ExameUserCreate';
import ExamUserRepositorie from '../../../repositorie/examCreate';


describe("Create user",() => {
    beforeAll(async () => {
        await createConnections()
      })
    it("should be able o create a new exam", async() =>{
        let examUserRepositorie = new ExamUserRepositorie
        const examRepositorie = getCustomRepository(ExamUserRepositorie)
        const exameCreate = examUserRepositorie.create({
            name:"Johnson2",
            email:"jh.tavares.jhgmail.com",
            examDate: "21/06/1992",
            examDuration: "5 min",
            examDescription: "ijsadoisadosdfdsisaoisdaf"
        })

        const result = await examRepositorie.save(exameCreate);
        expect(result).toHaveProperty("examDate")
        // expect(result.).toBe(200);
    })
})