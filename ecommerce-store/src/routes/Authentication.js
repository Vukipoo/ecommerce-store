import SignUpForm from '../components/SignUpForm/SignUpForm.js';
import SignInForm from '../components/SignInForm/SignInForm.js';

import './Authentication.styles.scss'


function Authentication() {
   
 

 
  return (
    <div className='authentication-container'>
    
        <SignInForm />
        <SignUpForm />
      
    </div>
  )
  }

export default Authentication