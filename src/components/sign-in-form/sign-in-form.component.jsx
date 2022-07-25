import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithUserAndPassword, auth } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        // ! user was destructured from response
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInWithUserAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error)
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                label="Email"
                type="email" 
                required 
                onChange={handleChange} 
                name="email"
                value={email}
                />
                
                <FormInput 
                label="Password"
                type="password" 
                required 
                onChange={handleChange} 
                name="password"
                value={password}
                />

                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle} >
                        Google Sign In
                    </Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;

/*
    1. Create form.

    2. Start applying functionality by using useState.
        * Create an object outside the component that represents the input fields in the form.
        * Inside the component, make the created object the initial state.
        * The initial state is the currentValue so destructure this object so that we have each input value.
        
    3. Create an handleChange() to update the state when user types in the input.
        * Pass the event object
        * Append handleChange() to each input = onChange={handleChange}
        * Append a name attribute to each input (name is a string that's the same as initialState values)
        * In the handleChange(), destructure name from the event object
           -The 'name' value that is appended is the same name value in the event object
           -we use the name to tell the setState which input field to update.
        * Append value attribute to each input and set equal to the values destructured from the state.
            -The state changes when the value changes, for every character entered in the input.
            -We destructure value and set it to the event object along with name
        *Set the updated state
            -Spread the other inputs that weren't used
            -Specify the name and value of the input field that is being updated
                - [name]: value
    4. Use the state to authenticate the form.
        !We don't want to store the password, instead we leverage firebase authentication to match user & pass
        *import createUserWithEmailAndPassword from firebase/auth in utils folder (will be imported in this file)
            -this function makes an authenticated user in to firebase authentication
        *parameters are email and password
            -if no email or password then we exit the function
            -if there are email and password, an auth object is created
        *Now we can import createUserWithEmailAndPassword() into sign-up-form component
    
    5. Apply functionality for the from to authenticate the new user.
        *Create a handleSubmit(), the form will point to this method when it's submitted.
        ! This is an async function because we are generating a document from an external server (firebase)
        *event.preventDefault(); is saying we don't want any default behavior of the form.
        *confirm that the passwords match
            -enter a condition and exit the function if condition is not met (return)
        *confirm that the user has been authenticated
            -once we confirm the passwords match, we'll continue to create the user
            -Now we "try" to call the firebase db and "catch" errors that may occur
            -We call the imported createAuthUserWithUserAndPassword() and pass the User and Passwords from our stateValues
            -if we log the response, we should see userCredentials with accessToken
                ! We can destructure this object and pull user, example: { user }
        *Create a user document from what this returns
            -We have to pass the email and password into the document that we are trying to create
            -To do this, we import createUserDocumentFromAuth()
            -displayName is null so we add a parameter additionalInformation to createUserDocumentFromAuth() and set it to an empty default value
            -if displayName is passed, displayName will be set to additionalInformation and override the null displayName becoming part of the new doc object
            -Now we can pass displayName and it becomes part of our document
            ! catch error was implemented to don't sign up with same email
    6. Reset form fields
        *Create a function called resetFormFields.
            -in the function, the setState is set to the default value.
            -we then place resetFormFields after the document object is created
*/