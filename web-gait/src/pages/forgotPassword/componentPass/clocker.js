import React from 'react';
import Botao from './botao';
import Api from '../../../services/api';

export default class Clock extends React.Component {

    constructor (){
        super();
        this.state={
          contador:60,
          email:'',
          estado:"Did not get the email? :RESEND",
          disabled:true
          
        }
        
        this.handleContadorplus= this.handleContadorplus.bind(this);
        this.handleContadorminus= this.handleContadorminus.bind(this);
        this.aumentar= this.aumentar.bind(this);
      }
    
      
      async handleContadorplus(e){
       
        try {
          const emailExists =  sessionStorage.getItem('forgotPassword');
         
          const data = {
            email:emailExists
          }
          console.log(">>>>>>>>>>>emailExiste", data)
          await Api.post('emailUpdate', data)
          //await Api.post('sendToken',data)
          .then(resp =>{
           if(resp.status === 200){
            alert("We send an email with the password reset link to the registered email, access your email to change the password!")
            //alert('Confirmation link sent successfully',emailExists);
           }
          })
          } catch (error) {
          const { data } = error.response;
          alert(data.message);
          }
        
        if (this.state.estado==="Did not get the email? :RESEND"){
          this.setState({
            estado: 'Loading...',
            disabled:false
          });
          this._interval=setInterval(this.aumentar,1000);
          } 
      }
    
       aumentar(e){
        
        if(this.state.estado==='Loading...'){
          this.setState({
            contador: this.state.contador-1,
            
          });
          
          
          
          if(this.state.contador === 0){         
            window.location.href= '/forgotPassword';
            sessionStorage.clear();
        }
        }
      }
      async handleContadorminus(){
        
        const emailExists =  sessionStorage.getItem('forgotPassword');
        try {
          const da = {
            email: emailExists
          }
          console.log(">>>>>>>>>>>",emailExists)
          await Api.post('emailUpdate', da)
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
          <div>
          <div>
          <Botao text={this.state.contador=== 60?this.state.estado:<h1>{this.state.contador}</h1>} disabled={!this.state.disabled}  onClick={this.handleContadorplus}/>
          </div>
          <div>
          </div>
            
          </div>
        );
      }
    }