import React from 'react';
import Botao from './botao';
import Api from '../../../../services/api';
import Button from '@material-ui/core/Button';

export default class Clock extends React.Component {

    constructor (){
        super();
        this.state={
          contador:60,
          email:'',
          estado:"Confirm email",
          disabled:true
          
        }
        
        this.handleContadorplus= this.handleContadorplus.bind(this);
        this.handleContadorminus= this.handleContadorminus.bind(this);
        this.aumentar= this.aumentar.bind(this);
      }
    
      
      async handleContadorplus(e){
       
        try {
          const emailExists =  sessionStorage.getItem('emailValidator');
          
          const data = {
            email:emailExists
          }
          await Api.post('sendEmailController',data)
          .then(resp =>{
           if(resp.status === 200){
            alert('Confirmation link sent successfully');
           }
          })
          } catch (error) {
          const { data } = error.response;
          alert(data.message);
          }
        
        if (this.state.estado==="Confirm email"){
          this.setState({
            estado: 'Loadind...',
            disabled:false
          });
          this._interval=setInterval(this.aumentar,1000);
          }
        
         
      }
    
       aumentar(e){
        
        if(this.state.estado==='Loadind...'){
          this.setState({
            contador: this.state.contador-1,
            
          });
          
          
          
          if(this.state.contador === 0){         
            window.location.href= '/confirmEmail';
        }
        }
      }
      async handleContadorminus(){
        
        const emailExists =  sessionStorage.getItem('emailValidator');
        try {
          const da = {
            email: emailExists
          }
          console.log(">>>>>>>>>>>",emailExists)
          await Api.post('sendEmailController',da)
          .then(response =>{
            if(response.status === 200){
              alert('Your link has been resent');
              window.location.href= '/';
              sessionStorage.clear();
            }
          })
        } catch (error) {
          const { data } = error.response;
          alert(data.message);
        }
        
      }
      close(){
        window.location.href= '/';
        sessionStorage.clear()
       
      }
      render() {
        
        return (
          <div className=" text-center">
    
            <h1>{this.state.contador}</h1>
            <Botao text={this.state.estado} disabled={!this.state.disabled}  onClick={this.handleContadorplus}/>
            <Botao text={'Resend'} disabled={!this.state.disabled}  onClick={this.handleContadorminus} /> 
            <Botao text="Close"   onClick={this.close}/> 
          </div>
        );
      }
    }