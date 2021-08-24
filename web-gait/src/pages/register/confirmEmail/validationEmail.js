import {useParams} from 'react-router-dom';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';



export default function ValidationEmail() {
  
//
  const {idUsuario} = useParams();
  const [msg, setMsg] = useState('');

  axios.get(`http://localhost:8081/activate/${idUsuario}`)
  .then(resp=>{
    console.log(resp.data.message);
    setMsg(resp.data.message);
  })  
  .catch(error=>{
    const { data } = error.response;
    alert(data.message);
    window.location.href= `/expireToken/${idUsuario}`;
  });

  function hundleSub(e){
    e.preventDefault()
    window.location.href= '/';
    
  }
  
  //Email successfully validated!
  return (
    <div>

    <form>
    
      <h2 className='subtitle'>{msg}</h2>
      <Button onClick={hundleSub} type='submit' fullWidth  variant="contained" color="secondary">
      Continue
      </Button>
      
    </form>
</div>
  );
}