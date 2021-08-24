import InputMask from 'react-input-mask';
import Button from '../../../components/utils/button/button';
import {useState,useEffect}from 'react';
import Api from '../../../services/api';

export default function Confirmation() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [crm, setCrm] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [phone2, setPhone2] = useState('');
  const [specialization, setSpecialization] = useState('');
    

  function back(e){
    e.preventDefault();
    
    window.location.href= '/register';
  }


  useEffect(() => {
    async function jsonUser(){
      const  objt = sessionStorage.getItem('user');
      const j = JSON.parse(objt);
      
      
      setName(j.name);
      setCpf(j.cpf);
      setCrm(j.crm);
      setEmail(j.email);
      setPhone(j.phone);
      setPhone2(j.phone2);
      setPassword(j.password);
      setSpecialization(j.specialization);
    }
    jsonUser();
  },[])

  

   
    
    async function submitOn(e) {
        e.preventDefault();
        
        try {
          if(name!==''&&email!==''&&password!==''&&crm!==''&&phone!==''&&specialization!==''){ 
            
            const result = sessionStorage.getItem('user');
            const newResponse = JSON.parse(result);
            const response = await Api.post('doctorSignUp', newResponse); 
            if(response.status === 201){
              window.location.href= '/confirmEmail';
            }

          }else{
            alert("Fill in all data")
          }

        } catch (error) {
        const { data } = error.response;
        alert(data.message);
        
        
        }
        
    }
    return (
    <div>
       <div><a href="/"><img src="https://i.imgur.com/tDvwyyA.png" className={'logo2'} title="source: imgur.com" /></a></div>
    <form>
      <h1 className='title'>Do you want to change the data?</h1>
      
      <div className = {"question"}>
      <input name="name" id="name" type="text" required
          value={name}
          
        />
        <label>Name:</label>
      </div>
      <br></br>
      <div className = {"question"}>
        <InputMask mask="999.999.999-99" name="cpf" type="text" id="cpf" required
        value={cpf}
        />
        
        <label>CPF:</label>
      </div>
      <br></br>
      <div className={"question"}>
        <InputMask mask="9999" id="crm" name="crm" type="text" required
        value={crm}
        />
       <label>CRM:</label>
      </div>
      <br></br>
      <div className={"question"}>
        <input name="specialization" id="specialization" type="text" required
          value={specialization} 
        />
        <label>Specialization:</label>
      </div>
      <br></br>
      <div className={"question"}>
        <InputMask mask="(99) 99999-9999" id="phone" name="phone" type="text" required
            value={phone}
        />
        <label>Phone:</label>   
      </div>
      <div className={"question"}>
        <InputMask mask="(99) 99999-9999" id="phone2" name="phone2" type="text" required
            value={phone2}       
        />
        <label>Phone2:</label>   
      </div>
      <br></br>
        <div className={"question"}>
          <input name="email" id="email" type="text" required
           value={email}
           
           />
          <label>E-mail:</label>
        </div>
        <br></br>
        <div className={"question"}>
          <input mask="password" id="password" name="password" type="text" required
            value={password}
           
        />
        <label>Password:</label>
      </div>
      <br></br>
      <div>
      <Button type="submit" onClick={(submitOn)}>Confirm</Button>
      <br></br>
      <br></br>
      <br></br>
      <Button type="submit" onClick={(back)}>Return</Button>
    </div>  
    </form>
            
        </div>
    )

}