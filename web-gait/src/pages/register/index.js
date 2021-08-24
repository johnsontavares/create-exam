import {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask';
import '../register/style.css';
import Button from '@material-ui/core/Button';
import Api from '../../services/api';
import AlertDialog from '../../components/utils/dialog/alertDialog.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from "../../components/utils/regex/input";


export default function Register() {

  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phone2, setPhone2] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [crm, setCrm] = useState('');
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [checked, setChecked] = useState('');
  const [loading, setLoading] = useState(false) 
 

  async function submitOn(e) {

    setLoading(true);
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      crm: crm,
      cpf: cpf,
      phone: phone,
      phone2:phone2,
      specialization: specialization
    }
    
    sessionStorage.setItem('emailValidator', email);
    try {
      if(name!==''&&email!==''&&password!==''&&crm!==''&&phone!==''&&specialization!==''){
        
        if(password !== confirmPassword){
          alert("Confirm Password Invalid")
        }

        if(password === confirmPassword){
          const response = await Api.post('verifyUser',data);
          if(response.status === 201){
          sessionStorage.setItem('user',JSON.stringify(data));
          window.location.href= '/confirmation';
        }
        }
        setLoading(false);
      }else{
        alert("Fill in all data")
        setLoading(false);
      }
      
    
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
      
    }
        
      
    
}

function textChange(e){
  
  setChecked({input: e.target.checked})
}
function onblurCrm(e){
  
  const {value} = e.target;

  if(value === ''){
    return;
  }
  fetch(`https://www.consultacrm.com.br/api/index.php?tipo=crm&uf=am&q=${value}&chave=2798018964&destino=json`)
  .then(data => data.json())
  .then(data =>{
    if(data.total === 0){
      alert('Non-existent CRM!')
      window.location.href= '/register';
    }
    
    for(const pessoa of data.item){
      setName(pessoa.nome)
      if(pessoa.situacao !== 'Ativo'){
        alert('Invalid CRM!')
      window.location.href= '/register';
      }
      if(pessoa.profissao === ''){
        setSpecialization("Nenhuma");
      }else{
        setSpecialization(pessoa.profissao);
      }
      
    }
  })
  
}

function senhaForca(){
  var senha = document.getElementById('password').value;
  var forca = 0;

  
  if((senha.length >=4) && (senha.length <= 7)){
    forca += 10;
  }else if(senha.length >7){
    forca += 25
  }
  if((senha.length >= 5) && (senha.match(/[a-z]+/))){
    forca += 10;
  }
  if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
    forca += 20;
  }
  if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
    forca += 25;
  }
  mostrarForca(forca);
}

function mostrarForca(forca){

  var senha = document.getElementById('password').value;

  if(forca < 30){
    document.getElementById("erroSenhaForca").innerHTML =
     '<div class="progress"><div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>';
  }else if((forca >= 30) && (forca < 60)){
    document.getElementById("erroSenhaForca").innerHTML = '<div class="progress"><div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>';
  }else if((forca >= 50) && (forca<70)){
    document.getElementById("erroSenhaForca").innerHTML = '<div class="progress"><div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>';
  }else if((forca >= 70) && (forca<100)){
    document.getElementById("erroSenhaForca").innerHTML = '<div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>';
  } 
  if(!senha.match(/[A-Z]+/)){
    document.getElementById("impForcaSenha").innerHTML = '<div class="alert alert-danger" role="alert"> - Must have a capital letter</div>';
  }
  if(!senha.match(/\d/)){
    document.getElementById("impForcaSenha").innerHTML = '<div class="alert alert-danger" role="alert"> - At least 1 number</div>';
  }
  if(senha.length < 6){
    document.getElementById("impForcaSenha").innerHTML = '<div class="alert alert-danger" role="alert"> - Minimum 6 a 13 caracteres</div>';
  }
  if(senha.length > 13){
    document.getElementById("impForcaSenha").innerHTML = '<div class="alert alert-danger" role="alert"> - Cannot be longer than 13 characters</div>';
  }
}



return (
<div >

<nav class="navbar navbar-expand-sm bg-light">
<img src="https://i.imgur.com/tDvwyyA.png" className={'logo2'} title="source: imgur.com"/>
  <div class="container-fluid">
  <br></br>
  <br></br>
  <a class="navbar-brand" href="/">Login</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <a className="prox" >Already have an account? </a><Button href="/">Enter</Button>
      </div>
  </div>
</nav>

    <form >
    
    
      <h1 className='title'>Register</h1>
      
      <h1 className='title'>{loading?<CircularProgress color="secondary"/>:''}</h1>
      <h2 className='subtitle'>Fill in the information below</h2>
      <div className={"question"}>
      
        <Input mask="crm" placeholder="*CRM" id="crm" name="crm" type="text" required
          onBlur={onblurCrm}
          onChange={e => setCrm(e.target.value)}
        
        />
      
      </div>
      
      <br></br>
      <div className = {"question"}>
      <input name="name" id="name" type="text" required
          value={name}
        />
        <label>*Name:</label>
      </div>
      <br></br>
      <div className = {"question"}>
        <InputMask mask="999.999.999-99" name="cpf" type="text" id="cpf" required
        onChange={e => setCpf(e.target.value)}
        />  
        <label>*CPF:</label>
      </div>
      <div className={"question"}>
        <input name="specialization" id="specialization" type="text" required
         value={specialization}
         
        />
        <label>*Specialization:</label>
      </div>
      <br></br>
      <div className={"question"}>
      <Input mask="telefone" placeholder="*Phone" id="phone" name="phone" type="text" required
         onChange={e => setPhone(e.target.value)}
        />
         
      </div>
      
      <br></br>
      
      <div className={"question"}>
     
        
      <Input mask="telefone" placeholder="Phone2" id="phone2" name="phone2" type="text" 
         onChange={e => setPhone2(e.target.value)}
        />
         
      </div>
      <br></br>
        <div className={"question"}>
          <input name="email" id="email" type="email" required
          onChange={e => setEmail(e.target.value)}
           />
          <label>*E-mail:</label>
        </div>
        <br></br>
        <div className={"question"}>
          <input  id="password" name="password" type="password" required
          onChange={e => setPassword(e.target.value)}
          onKeyUp={(senhaForca)}
        />
        <label>*Password:</label>
        
      </div>
      <div className={"form-group row"}>
        <label className={"col-sm-7 col-form-label"}></label>
        <div className={"col-sm-5"}>
        <div id="erroSenhaForca"></div>   
             
        </div>
        
        </div>
        <br></br>
        <div className={"form-group row"}>
        <label className={"col-sm-7 col-form-label"}></label>
        <div className={"col-sm-5"}>
        <div id="impForcaSenha"></div>     
        </div>
        
        </div>
        <br></br>
        <br></br>
        <div className={"question"}>
          <input  id="password" name="password" type="password" required
           onChange={e => setConfirm(e.target.value)}
        />
        <label>*Confirm Password:</label>
      </div>
      <br></br>    
      
      <div>
      <AlertDialog/>
      <input type="checkbox"  onChange={textChange.bind(this)} />
     
      <label>I have read and agree to the Terms of Use</label>
      <br></br>
      <br></br>
      
    </div>  
    <Button 
     fullWidth type="submit" variant="contained"
      onClick={submitOn}
      disabled={!checked.input} color="primary">Sign Up</Button>
    
    <br></br>
    <br></br>
    <div>
    <a href='/'><Button variant="contained" color="primary">Return</Button></a>
    </div>
    </form>
    
  </div>
);
}