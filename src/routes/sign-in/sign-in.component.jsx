import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
//imported signInWithGooglePopup from firebase.utils to login on popup window

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

// SignIn component is initiated.
// logGoogleUser is set to an asynchronous function.
// await pauses the function until it receives a value.
// await takes this value and set a constant equal to the response from Google's API
// response contains the accessToken that allows us to use CRUD operations.
// We return a button that points to the logGoogleUser() and creates a popup of the login window from Google
const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        console.log(user);
        // ! user was destructured from response
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;