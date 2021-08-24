import { useState} from "react";
import Api from "../../services/api";
import {useParams} from 'react-router-dom';
import "./enableprofile.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
export default function Justification(){
    const classes = useStyles();
   
   const [description, setDescription] = useState('');
   const [checked, setChecked] = useState('');
   const {idUsuario} = useParams();

   var name = [];
     

    async function handleSub(e){

    e.preventDefault()
        

        const config = {
            headers:{
                Authorization:localStorage.getItem('token')
        }

    }
        try {
           
           
            var listaMarcados = document.getElementsByTagName("INPUT");
            for (var loop = 0; loop < listaMarcados.length; loop++) {
                var item = listaMarcados[loop];
                if (item.type == "checkbox" && item.checked) {
                    
                        console.log(item.value+',');
                        name[loop] = item.value;
                       }
                    
                }
                
                const res =  await Api.post('justification',{name, description}, config)
                console.log("res>>>>>>", res.data);
                
                window.location.href=`/enableProfile/${idUsuario}`
            
       //{/window.confirm("Tem certeza?");/}
                
                
             
            
        
        
        } catch (error) {
        const { data } = error.response;
        alert(data.message);
        }
       
   }
   function textChange(e){
  
    setChecked({input: e.target.checked})
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
    <a class="navbar-brand" href='/viewProfile'>Profile</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      </div>
  </div>
</nav>
<br></br>
<br></br>
<br></br>
            <form className={"form"} >
            <text className={"subtitle"}><h1>INACTIVATE PROFILE</h1></text>
                <br></br><br></br>
                <text className={"subtitle"}>Justify your departure:</text>
                <br></br><br></br>
                <label className={"container"}>I will no longer use the platform
                <input type = "checkbox" id="1"  value="Eu Não usarei mais a plataforma"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>Did not meet my needs
                <input type = "checkbox" id="item2" value="Não atendeu as minhas necessidades"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>I found the platform confusing or difficult
                <input type = "checkbox" id="item3" value="Achei a plataforma confusa ou difícil"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>I just didn't like the platform
                <input type = "checkbox" id="item4" value="Simplesmente não gostei da plataforma"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>I couldn't use the features
                <input type = "checkbox" id="item5" value="Não consegui utilizar as funcionalidades"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>Other reasons:
                <input type="checkbox" id="outros" onChange={textChange.bind(this)} value="Outros motivos"  ></input>
            
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                
                <textarea className={'textarea'} id="estado" disabled={!checked.input} onChange={e => setDescription(e.target.value)}   placeholder="
Enter your justification"></textarea>
                <div>
                 <br></br>
                <Button
                fullWidth 
                variant="contained"
                color="primary"
                onClick={handleSub}>Continue inactivation</Button>
                </div>
                <br></br>
                <div>
                <a href='/viewProfile'>Return</a>
                </div>
                
            </form>
           
        </div>
    )
}