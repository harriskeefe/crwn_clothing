// Creates an instance object for the firebase app.
import { initializeApp } from 'firebase/app';

// Create an instance object for firebase authorization.
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut } from 'firebase/auth';

// Creates an instance object for firebase database.
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc } from 'firebase/firestore';



// Configuration file that was made online allowing CRUD operations w/firebase instance.
const firebaseConfig = {
    apiKey: "AIzaSyCqYD26t-3WvRWL9FH_J33Z_LTFAKvTMWg",
    authDomain: "crwn-clothing-db-cca47.firebaseapp.com",
    projectId: "crwn-clothing-db-cca47",
    storageBucket: "crwn-clothing-db-cca47.appspot.com",
    messagingSenderId: "228192621089",
    appId: "1:228192621089:web:f8b7f3108eef8f5f81c960"
};

// Initialize Firebase and attached our firebaseConfig object which enables CRUD actions.
const firebaseApp = initializeApp(firebaseConfig);

// Create a new authorization class w/GoogleAuthProvider to prompt user to select a Google account.
// getAuth() Authenticate's the lifecycle of authorization.
// Google's popup window is exported w/authorization
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Points to the database enabling setting/getting data.
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    //If this object doesn't exist, google will still create an object
    //It contains the uid which is attached to the 'users' collection in the db
    //Now we can set values in this object

    const userSnapshot = await getDoc(userDocRef);
    // getDoc allows us to get data
    // we want a snapshot of the user reference to see if it exist
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // !if the snapshot doesn't exist, we want to create a userDocRef
    // We take some constants from the userAuth
    // createdAt tells us what time the user logged in
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error){
            console.log('error creating the user', error.message)
        }
    }
    // if the snapshot exist, the if statement will be skipped and we return userDocRef
    return userDocRef;
}

export const createAuthUserWithUserAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithUserAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
/*
    firebase/app brings down a suite of tools from the library
    initializeApp creates our own instance (object) of firebase when call it from firebase/app
*/

/*
    getAuth creates an authorization instance (object)
    signInWithRedirect allows signing up w/redirect
    signInWithPopup allows signing up through popups
    GoogleAuthProvider is a class from google authorization
    ! B/c it's a class we may create different instances for popup and redirect for example
*/

/*
    getFirestore creates an instance of firestore database
    doc allows us to retrieve documents from the firestore database
    getDoc allows us to get document data
    setDoc allows us to set document data
*/

/*
    firebaseConfig is your web app's Firebase configuration that was made online.
    This config extracts functionality allowing interactions (CRUD operations) with our instance of firebase. 
*/

/*
    GoogleAuthProvider is a class. We instantiate GoogleAuthProvider by using the const provider to make a new instance (object) of the class.
    Each custom parameter will take some kind of configuration abject and tell it how to behave.
    Every time a user interacts with our provider instance (object), we want to force them to select an account.
*/

/*
    signInWithGooglePopup is exported so that we can sign in on a popup window
    googleProvider come from the class GoogleAuthProvider, a provider could be many like facebook, github etc.
    theres only one type of 'auth'
    provider instance are passed prompts the popup
    *this is imported in the sign-in component
*/


/*
    This function receives a user authentication object from the sign-in component, takes the data and stores it in firestore. 
    We need to see if theres an existing document reference.
    *this is a special type of reference when talking about an instance of a document model
    the parameter is userAuth b/c that's the value that we are getting back
    * doc has 3 parameters
    ! Remember that doc retrieves documents from the database
    * db is the instance of the database
    * 'users' is the collections
    * userAuth.uid is the unique id that's used to get a document reference.
*/