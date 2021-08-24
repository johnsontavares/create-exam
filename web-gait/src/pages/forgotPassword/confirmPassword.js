import {useState} from 'react';
import Button from '@material-ui/core/Button';
import {useParams} from 'react-router-dom';
import Api from '../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '60ch',
      },
    },
  }));
export default function ConfirmPassword(){

    const classes = useStyles();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');
    const {idUsuario} = useParams();
    const [loading, setLoading] = useState(false)


    async function handleSubmmit(e){
        
        const data = {
            password:password,
        }
        try {

            if(password!=='' && confirmPassword!==''){
                if(password === confirmPassword){
                   const response = await Api.put(`updatePassword/${idUsuario}`,data)
                   
                   if(response.status === 200){
                    alert('Password changed successfully!');
                    window.location.href='/'
                   }
                   
                }else{
                 alert('Invalid password!');
                }
                setLoading(false);
            }else{
                alert('Please !, fill in all the data!');
            }
            
        } catch (error) {
            const { data } = error.response;
            alert(data.message);
            window.location.href='/'
        }
        setLoading(false);
       
    }
    function loadingSubmit(){
        setLoading(true);
        setTimeout(
          () => handleSubmmit(),
          2000
        )
      }
function senhaForca(){
  const  senha = document.getElementById('password').value;
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

const  senha = document.getElementById('password').value;
  
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
  document.getElementById("erroSenhaForca").innerHTML = '<div class="alert alert-danger" role="alert"> - Must have a capital letter</div>';
}
if(!senha.match(/\d/)){
  document.getElementById("erroSenhaForca").innerHTML = '<div class="alert alert-danger" role="alert"> - At least 1 number</div>';
}
if(senha.length < 6){
  document.getElementById("erroSenhaForca").innerHTML = '<div class="alert alert-danger" role="alert"> - Minimum 6 a 13 caracteres</div>';
}
if(senha.length > 13){
  document.getElementById("erroSenhaForca").innerHTML = '<div class="alert alert-danger" role="alert"> - Cannot be longer than 13 characters</div>';
}
}
return (
      
  <div>

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
    </div>
  </div>
</nav>


<form >
        <br/>
        <text >Forgot Password</text>
        <br/>
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
        <div className={"question"}>
          <input  id="password" name="password" type="password" required
           onChange={e => setConfirm(e.target.value)}
        />
        <label>*Confirm Password:</label>
      </div>
      <br></br>    
      
      <div>
        <Button 
            fullWidth 
            variant="contained"
            onClick={loadingSubmit} 
            color="primary">
            {loading?<CircularProgress color="inherit" />:"Send"}
        </Button>
        </div>
        <br/>
  </form>

</div>
    
  );
}