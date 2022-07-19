import { initializeApp } from 'firebase/app';
//firebase/app brings down a suite of tools from the library
//initializeApp creates our own instance (object) of firebase when call it from firebase/app

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
// getAuth creates and authorization instance (object)
// signInWithRedirect allows signing up w/redirect
// signInWithPopup allows signing up through popups
// GoogleAuthProvider is a class from google authorization
// B/c it's a class we may create different instances for popup and redirect for example

// firebaseConfig is your web app's Firebase configuration that was made online.
// This config extracts functionality allowing interactions (CRUD operations) with our instance of firebase. 
const firebaseConfig = {
    apiKey: "AIzaSyCqYD26t-3WvRWL9FH_J33Z_LTFAKvTMWg",
    authDomain: "crwn-clothing-db-cca47.firebaseapp.com",
    projectId: "crwn-clothing-db-cca47",
    storageBucket: "crwn-clothing-db-cca47.appspot.com",
    messagingSenderId: "228192621089",
    appId: "1:228192621089:web:f8b7f3108eef8f5f81c960"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Our instance of firebase is attached to the config which enables CRUD actions


const provider = new GoogleAuthProvider();
//GoogleAuthProvider is a class. We instantiate GoogleAuthProvider by using the const provider to make a new instance (object) of the class.
//Each custom parameter with take some kind of configuration abject and tell it how to behave.
//Every time a user interacts with our provider instance (object), we want to force them to select an account.
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
//Anything we authenticate is done one way which is why there is no instance of getAuth() (getAuth is a function)
//Why have multiple ways of authentication?
//We need one way to authenticate for the lifecycle of the authorization
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);