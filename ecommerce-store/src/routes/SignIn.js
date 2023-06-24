import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase.utils.js';
import SignUpForm from '../components/SignUpForm/SignUpForm.js';



function SignIn() {
   
    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)

    }

 
  return (
    <div>
        <h1>
            Sign In
        </h1>
        <button onClick = {logGoogleUser}>
            Sign in with google PopUp
        </button>
        <SignUpForm />
      
    </div>
  )
  }

export default SignIn