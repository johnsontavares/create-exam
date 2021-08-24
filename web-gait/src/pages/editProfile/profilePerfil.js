import {useParams} from 'react-router-dom';
import {useEffect, useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../../services/api';
import Button from '@material-ui/core/Button';
import '../editProfile/editprofile.css';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from "../../components/utils/regex/input";
import InputMask from 'react-input-mask';


const useStyles = makeStyles((theme) => ({
    root: {display: 'flex',},
    title: {flexGrow: 1,},
    appBarSpacer: theme.mixins.toolbar,
    content: {flexGrow: 1,height: '100vh',overflow: 'auto',},
    container: {paddingTop: theme.spacing(2),paddingBottom: theme.spacing(4),},
    paper: {padding: 35,display: 'flex',overflow: 'auto',flexDirection: 'column',},
    formControl:{width:'100%'},
    btnSuccess:{ backgroundColor:"green",color:"#fff","&:hover":{backgroundColor:"#12b912"}}
  }));
export default function ProfilePerfil() {
    const classes = useStyles();

    const [specialization, setSpecialization] =  useState('');
    const [phone, setPhone] =  useState('');
    const [phone2, setPhone2] =  useState('');
    const {idUsuario} = useParams();
    
    

    ////////////////// rota get //////////////////

try {

  useEffect(()=>{
    async function getUserData(){
      var response = await Api.get('profilePerfil/'+idUsuario)
      setPhone(response.data.phone)
      setPhone2(response.data.phone2)
      setSpecialization(response.data.specialization)
      // console.log(response.data.specialization)
    }
    getUserData()
  
},[])

} catch (error) {
  const { data } = error.response;
  alert(data.message);
}


async function handleSubmit(e){
    e.preventDefault();
    const data = {
        specialization:specialization,
        phone:phone,
        phone2: phone2
      }


    const config = {
        headers:{
            Authorization:localStorage.getItem('token')
    }
    
}

try {
    if(specialization!==''&&phone!==''){
        const response = await Api.put(`updateUser/${idUsuario}`,data, config);

        if(response.status===200){
          alert('Profile edited successfully');
          window.location.href='/viewProfile'
          
        }else{
          alert('Error updating user!');
        }
      }else{
        alert('Please fill in all data!');
      }
} catch (error) {
    const { data } = error.response;
    alert(data.message);
}



}

    return(
            <div>
               <nav class="navbar navbar-expand-sm bg-light">
        <img src="https://i.imgur.com/tDvwyyA.png" className={'logo2'} title="source: imgur.com"/>
        <div class="container-fluid">
  
    <br></br>
    <br></br>
    <a class="navbar-brand"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <a class="navbar-brand" href='/home'>Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href='/viewProfile'>Profile</a>
      </div>
  </div>
</nav>
                    <br></br>
                    <br></br>
                    <form>
                    <text className = {'title'}>Edit profile</text>
                    <br/>
                    <br></br>
                    <FormControl className={classes.formControl}>
                        <br/>
                    <InputLabel id="labelTipo">Specialization</InputLabel>
                    <Select
                      labelId="labelTipo"
                      id="tipo"
                      onChange={e => setSpecialization(e.target.value)}
                      value= {specialization}

                    >
                      <MenuItem value={"Cardiologia"}>Cardiologia</MenuItem>
                      <MenuItem value={"Dermatologia"}>Dermatologia</MenuItem>
                      <MenuItem value={"Ginecologia"}>Ginecologia e Obstetrícia</MenuItem>
                      <MenuItem value={"Ortopedia"}>Ortopedia</MenuItem>
                      <MenuItem value={"Anestesiologia"}>Anestesiologia</MenuItem>
                      <MenuItem value={"Pediatria"}>Pediatria</MenuItem>
                      <MenuItem value={"Oftalmologia"}>Oftalmologia</MenuItem>
                      <MenuItem value={"Psiquiatria"}>Psiquiatria</MenuItem>
                      <MenuItem value={"Urologia"}>Urologia</MenuItem>
                      <MenuItem value={"Oncologia"}>Oncologia</MenuItem>
                      <MenuItem value={"Endocrinologia"}>Endocrinologia</MenuItem>
                      <MenuItem value={"Neurologia"}>Neurologia</MenuItem>
                      <MenuItem value={"Hematologia"}>Hematologia</MenuItem>
                      <MenuItem value={"CIRURGIA PlÁSTICA"}>Cirurgia Plástica</MenuItem>
                      <MenuItem value={"CIRURGIA GERAL"}>Cirurgia Geral</MenuItem>
                      <MenuItem value={"Nenhuma"}>Nenhuma</MenuItem>
                      <MenuItem value={"GINECOLOGIA E OBSTETRÍCIA (Ultra-sonografia em ginecologia e obstetrícia)"}>GINECOLOGIA E OBSTETRÍCIA (Ultra-sonografia em ginecologia e obstetrícia)</MenuItem>
                      <MenuItem value={"Nenhuma"}>Nenhuma</MenuItem>

                      {/* console.log(specialization) */}
                      {/* <MenuItem value={specialization}>{specialization}</MenuItem> */}

                    </Select>
                    </FormControl>
                    
                    <br></br>
                    
                    <div className={"question"}>
                         <InputMask mask="(99) 99999-9999" placeholder="phone" id="phone" name="phone" type="text" required
                           
                           
                           onChange={e => setPhone(e.target.value.replace(/-/g,"").replace("(","").replace(")","") )}
                           
                            value = {phone}
                            

                        />
                        </div>
                        <br></br>
                        <div className={"question"}>
                         <InputMask mask="(99) 99999-9999"  placeholder="phone2" id="phone2" name="phone2" type="text" required
                            onChange={e => setPhone2(e.target.value.replace(/-/g,"").replace("(","").replace(")","") )}
                          
                            value = {phone2}
                        />


                        </div>
                        <br></br>
                        <Button
                        fullWidth 
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit} >Save edit</Button>
                
                    </form>
                    
            </div>
        )
}