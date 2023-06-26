import React from "react";
import { useState } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import FormInput from "../FormInput";
import Button from "../Button";
import './SignInForm.styles.scss'
import { connectFirestoreEmulator } from "firebase/firestore";
import { useInRouterContext } from "react-router-dom";

const defaultFormFields = {
  email: '',
  password: '',
}

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields



  const resetFormFields = () => {
    setFormFields(defaultFormFields)
}

const signInWithGoogle = async() => {
  await signInWithGooglePopup();
 
   

}
  
    const handleSubmit = async (event) => {
      event.preventDefault();



      try {
        const { user } = await signInAuthUserWithEmailAndPassword(email, password)
        
        resetFormFields()
      }catch(error){
        switch(error.code) {
          case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
          case 'auth/user-not-found':
          alert('no user associated with this email')
          break;
          default:
          console.log(error)
        }
      }
    }
      
    
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({ ...formFields, [name]: value })

  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label = 'email' type='email' required onChange={handleChange} name = 'email' value = {email} />
        <FormInput label = 'password' type='password' required onChange={handleChange} name = 'password' value = {password} /> 
        
        <div className="buttons-container">
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType = 'google' onClick = {signInWithGoogle}>Google Sign In</Button>
        </div>
     
      </form>
    </div>
  );
    }
  


export default SignInForm
