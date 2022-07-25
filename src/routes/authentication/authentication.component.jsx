import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './authentication.styles.scss';

// SignIn component is initiated.
// logGoogleUser is set to an asynchronous function.
// await pauses the function until it receives a value.
// await takes this value and set a constant equal to the response from Google's API
// response contains the accessToken that allows us to use CRUD operations.
// We return a button that points to the logGoogleUser() and creates a popup of the login window from Google
const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;