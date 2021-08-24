import Api from "../../../services/api";
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import Clock from '../tokenExpired/tokenComponent/clocker';

export default function TokenExpired(){
    const {idUsuario} = useParams();
    const [pessoa, setPessoa] = useState('');

  Api.get(`http://localhost:8081/userId/${idUsuario}`)
  .then(resp=>{
    setPessoa(resp.data.email);
    sessionStorage.setItem('refreshToken', resp.data.email);
    console.log(">>>>>>>>>>>",sessionStorage.getItem('refreshToken'))
  })  
  .catch(error=>{
    const { data } = error.response;
    alert(data.message);
    window.location.href= `/expireToken/${idUsuario}`;
  });

    return (
    <form >
    <div>
        <h2 className='subtitle'>Almost there,
        Please confirm your email to
        send the validation instructions.
        The validation link will be sent to: {pessoa}</h2>
    </div>
    <Clock/>
    </form>
    );
}