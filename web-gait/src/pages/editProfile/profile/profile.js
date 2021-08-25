import { Component} from 'react';
import Api from '../../../services/api';
import { Link } from 'react-router-dom'
import './profile.css';
import Button from '@material-ui/core/Button';
import Sidebar from '../../../components/sidebar/Sidebar';

export default class Profile extends Component{

    state = {};

    componentDidMount(){
        const config = {
            headers:{
                Authorization:localStorage.getItem('token')
        }
        
    }
    Api.get('showProfile',config).then(
        res =>{
            this.setState({
                userDoctor:res.data
            })
        },
        err =>{
            console.log(">>>>>erro home>>>>>>>>>>>",err);
        }
    )
    };

    signUp(){
        localStorage.clear();
        window.location.href='/'
    }
    
    render() {

        if(this.state.userDoctor){
            return(
                <div>
               
            <Sidebar />
            
            <form>
                <div><img src = 'https://i.imgur.com/r5SArNh.png' className={"icon"}/></div>
                <h1 className={"title"}>My Profile</h1>
                <br></br><br></br>
                    <table>
                        <tr>
                        <th>NAME </th><br></br>
                        <th>EMAIL </th><br></br>
                        <th>SPECIALIZATION</th><br></br>
                        <th>PHONE</th><br></br>
                    </tr>
                    {/* const number = this.state.userDoctor.phone */}
                        <tr>
                        <td>{this.state.userDoctor.name}</td><br></br>
                        <td>{this.state.userDoctor.email}</td><br></br>
                        <td>{this.state.userDoctor.specialization}</td><br></br>
                        <td>{this.state.userDoctor.phone.replace(/^(\d\d)(\d)/g,"($1)$2").replace(/(\d{4})(\d)/,"$1-$2")} </td><br></br>
                        </tr>
                    </table>
                    <br></br>
                        <Link to ={`/profilePerfil/${this.state.userDoctor.id}`}><Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        >TO EDIT</Button></Link>
                        <br></br>
                        <br></br>
                        
                        <Link to ={`/justification/${this.state.userDoctor.id}`}><Button
                        
                        variant="contained"
                        color="primary"
                        >INACTIVATE PROFILE</Button></Link>
                </form>
                </div>      
            )
        }
        return (
            <div>
             
            
           
            
            </div>
            
        )
    }
}