import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase.utils.js'


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
    </div>
  )
}

export default SignIn