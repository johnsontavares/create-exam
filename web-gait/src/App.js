import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom';
import CreatePoint from './pages/home';
import EditExam from './pages/EditeExam'
import Login from '../src/pages/login/index';
import Register from '../src/pages/register/index';
import Confirmation from '../src/pages/register/confirmation/confirmation';
import Painel from '../src/pages/painel/index';
import Profile from './pages/editProfile/profile/profile';
import ProfilePerfil from '../src/pages/editProfile/profilePerfil';
import ResetPassword from '../src/pages/forgotPassword/index';
import EnableProfile from '../src/pages/enableProfile/enableProfile';
import Justification from '../src/pages/enableProfile/justification';
import ConfirmPassword from '../src/pages/forgotPassword/confirmPassword';
import ConfirmEmail from '../src/pages/register/confirmEmail/index';
import ValidationEmail from '../src/pages/register/confirmEmail/validationEmail';
import ExpiredToken from '../src/pages/register/tokenExpired/tokenExpired';
import ForgotPass from './pages/forgotPassword/forgotPass';
import PrivateRoute from './authenticated';



function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
            
            <Route path="/home" exact component={CreatePoint}/>
            <Route path="/editExam/:idExam" exact component={EditExam} />
            <Route path="/" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/confirmation" exact component={Confirmation}/>
            <Route path="/painel" exact component={Painel}/>
            <Route path="/viewProfile" exact component={Profile}/>
            <Route path="/justification/:idUsuario" exact component={Justification}/>
            <Route path="/enableProfile/:idUsuario" exact component={EnableProfile}/>
            <Route path="/profilePerfil/:idUsuario" exact component={ProfilePerfil}/>
            <Route path="/forgotPassword" exact component={ResetPassword}/>
            <Route path="/confirmPassword/:idUsuario" exact component={ConfirmPassword}/>
            <Route path="/confirmEmail" exact component={ConfirmEmail}/>
            <Route path="/validationEmail/:idUsuario" exact component={ValidationEmail}/>
            <Route path="/expireToken/:idUsuario" exact component={ExpiredToken}/>
            <Route path="/forgotPass" exact component={ForgotPass}/>
          
        </BrowserRouter>
    </div>
  );
}

export default App;
