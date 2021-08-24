import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Api from '../../../../services/api';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState('');
  

  useEffect(() => {
    async function jsonUser(){
      const  user = sessionStorage.getItem('emailBanco');
      setEmail(user);
    }
    jsonUser();
  },[])


  async function handleClickOpen (e) {
    try {
  console.log("busca e guarda informacoes")
  
  
  
 sessionStorage.getItem("emailValidator")
  
  
  
  
  
} catch (error) {
        //Retorno erros da api
        const { data } = error.response;
        alert(data.message);
      }
    

    setOpen(true);
  };

  async function okHandle (e) {
   
   try {
    console.log("Faz a atualizacao no banco")

    
    const dataId = sessionStorage.getItem('id')
    if(!email===''){
    const resp = await Api.put(`updateMailSend/${dataId}`,{email});
    sessionStorage.setItem("emailValidator",resp.data.email)
    window.location.href= '/confirmEmail';
    }else{
      alert('Invalid Email!')
    }
    
    } catch (error) {
      //Retorno erros da api
      const { data } = error.response;
      alert(data.message);
    }
    setOpen(false);
  };
 

  return (
    <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        To edit
      </Button>
      <Dialog open={open} type="email" onClose={okHandle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" type="email" require>To edit</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="Email"
            type="email"
            require
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          
          <Button
          
          onClick={okHandle} color="secondary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}