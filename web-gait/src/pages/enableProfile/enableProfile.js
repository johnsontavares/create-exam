import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/utils/button/button';

export default function EnableProfile(){

    const {idUsuario} = useParams();

    async function handleSubmmit(e){
        
        e.preventDefault()

        
    
    try {
    
    axios({
        method:'PUT',
        url:`http://localhost:8081/enable/${idUsuario}`,
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
    localStorage.clear();
    window.location.href='/'
    
    } catch (error) {
        const { data } = error.response;
        alert(data.message); 
    }
    
    }
    return(
    <div>
    
    <div><a href="/home"><img src="https://i.imgur.com/tDvwyyA.png" className = {'logo'} title="Smart Palm"/></a></div><br></br><br></br>
            <form className={"form"}>
            <text className ={"title"}>Disable Profile</text><br></br><br></br>
            <text className = {"subtitle"}>When you deactivate your profile, you will no longer have access to the Smart Palm system. Are you sure you want to proceed?</text>
            <br></br><br></br>
            <Link to = '/justification'><Button onClick={handleSubmmit}>Confirm Inactivation</Button></Link>
            </form>
        </div>
    )
}