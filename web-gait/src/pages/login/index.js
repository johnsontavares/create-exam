import Button from '@material-ui/core/Button';
import './index.css';
import { useState} from "react";
import Api from '../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function SignIn() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn]  = useState('');

  async function handleSubmit(){

        
    
    try {
      if(email!==''&&password!==''){
        await Api.post('signInDoctor',{email, password})
    .then(response =>{
      if(response.status === 200){
        localStorage.setItem('token', response.data.token)
        window.location.href='/home'
        
      }else if(response.data.status === 404){
        alert('Your profile has been inactivated, please reset your password to reactivate your profile')
        window.location.href='/'
      }else{
        alert('server error')
        window.location.href='/'
      }
    })
    setLoading(false);
      }else{
        alert('Please !, fill in all the data!');
      }
      setLoading(false);
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
      window.location.href='/'
    }
    
    
}

function loadingSubmit(){
  setLoading(true);
  setTimeout(
    () => handleSubmit(),
    2000
  )
}
function textChange(){
  var rmCheck = document.getElementById("rememberMe");
  var emailInput = document.getElementById("email");
  
 
if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;

  console.log(">>>>>>>>>>>>>>>>>>rmCheck", rmCheck.value)
  console.log(">>>>>>>>>>>>>>>>>>emailInput", emailInput.value)
  //console.log(">>>>>>>>>>>>>>>>>>rmCheck", rmCheck.value)
 //console.log(">>>>>>>>>>>>>>>>>>emailInput", emailInput.value)
} else {
rmCheck.removeAttribute("checked");
emailInput.value = "";
  
}

if (rmCheck.checked && emailInput.value !== "") {
  localStorage.username = emailInput.value;
  localStorage.checkbox = rmCheck.value;
    
} else {
  localStorage.username = "";
  localStorage.checkbox = "";
}

}

return (
  <div>
  <div><a href="/"><img src="https://i.imgur.com/tDvwyyA.png" className = {'logo'} title="Smart Palm"/></a></div>
  <br></br>
  <br></br>
  <form onSubmit={handleSubmit}>
  <h1 className={"title"}>Start your login.</h1>
    
    <div className={"question"}>
    <input type="email" name="email"  id="email" value={email} required onChange={e => setEmail(e.target.value)} />
    <label
    >E-mail:</label>
    </div>
    
    <br/>
    
    <div className = {"question"}>
    <input type="password" name="password" required 
        onChange={e => setPassword(e.target.value)}/>
    <label>Password:</label>
    </div>
    
    
    <br></br>
    <div className ={"direita"}><Button 
    
    variant="contained"
    onClick={loadingSubmit} 
    disable={loading}
    color="primary"
    fullWidth >{loading?<CircularProgress color="inherit" />:"Login"}</Button></div>
    <br></br>
    <div>
    <input type="checkbox" name="remember" value="lsRememberMe" id="rememberMe"
   onChange={textChange}
    
    />
      <label > Remember-me</label>
    </div>
    
    <br></br>
    <br></br>
    <a href = "/forgotPassword" className={"forg"}>I forgot my password/Reactivate my profile</a>
    <a href ="/register" className={"reg"}>Sign Up</a>
   </form>
  
</div>
);
}