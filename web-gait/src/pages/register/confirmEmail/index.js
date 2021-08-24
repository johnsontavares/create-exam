import Clock from './component/clocker';
import FormDialog from '../confirmEmail/component/FormDialog';



export default function ComfirmEmail() {
    
const  emailStorage = sessionStorage.getItem('emailValidator');
      
    

return (
  <form >
    <div>
    <h2 className='subtitle'>Almost there,
       Please confirm your email to
       send the validation instructions.
      The validation link will be sent to: {emailStorage}</h2>
    </div>
      
      <Clock/>
      <FormDialog fullWidth  color="secondary">To edit</FormDialog>
      
    </form>
);
}