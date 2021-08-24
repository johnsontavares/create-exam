import {useState} from 'react';
import Clock from './componentPass/clocker';

export default function ForgotPass(){

    //const [emailPass, setEmailPass] = useState('');

    const emailPass  = sessionStorage.getItem('forgotPassword')
    console.log(emailPass)
    return (
    <form >
    <div>
        <h2 className='subtitle'>Almost there,
        Please confirm your email to
        send the validation instructions.
        The validation link will be sent to: {emailPass}</h2>
    </div>
    <Clock/>
    </form>
    )
}