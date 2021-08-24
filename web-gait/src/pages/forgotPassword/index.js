import {useState} from 'react';
import Api from '../../services/api';
import Button from '@material-ui/core/Button';
import './form.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Clock from './componentPass/clocker';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '60ch',
      },
    },
  }));
export default function ResetPassword() {

    const classes = useStyles();

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [carrega, setCarrega] = useState('') 
    
    async function handleSubmmit(e){
      

        
            try {
                if (email!=='') {
                    
                    sessionStorage.setItem('forgotPassword', email);
                    const response = await Api.post('emailUpdate',{email})
                    console.log(">>>>>>>>>>>>>",setCarrega(response.status))
                    alert("We send an email with the password reset link to the registered email, access your email to change the password!")
                    //window.location.href = '/forgotPassword'
                    
                }else{
                    alert("Email not registered")
                    
                }
                setLoading(false);
            } catch (error) {
              
                const { data } = error.response;
                alert(data.message);
                setCarrega(data)
                //window.location.href='/forgotPassword'
                setLoading(false);
            }          
    }
    function loadingSubmit(){
        setLoading(true);
        setTimeout(
          () => handleSubmmit(),
          2000
        )
      }
        return (

<div>

<nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
  <br></br>
  <br></br>
  <h1 className={"title"}>Forgot Password</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          
        </li>
      </ul>
      </div>
  </div>
</nav>

<form className={"formulario"}>
  <br/>
    
      <br/>
        <br></br>
          <TextField
            id="outlined-basic" 
            fullWidth
            label="Email" 
            type="email"
            onChange={e => setEmail(e.target.value)}
            variant="outlined" />
            <br/>
            
          <Divider variant="middle"/>
            <br/>
            <div>
            
            <Button 
                fullWidth 
                variant="contained"
                onClick={loadingSubmit} 
                disable={loading}    
                color="primary">
                {loading?<CircularProgress color="inherit" />:"Send"}
            </Button>
            </div>
            <br/>
            <a href ="/" className={"label1"}>Return</a>
            <div className={"label2"}>
            {carrega.message !== 'Failed to send message'?'':<Clock/>}
            </div>
    </form>
</div>
  );
}