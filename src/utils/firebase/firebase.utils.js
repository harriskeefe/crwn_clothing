// firebase app
import { initializeApp } from 'firebase/app';

// firebase authorization
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';

// firebase database
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// firebase configuration for CRUD operations
const firebaseConfig = {
  apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
  authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
  projectId: 'crwn-clothing-db-98d4d',
  storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
  messagingSenderId: '626766232035',
  appId: '1:626766232035:web:506621582dab103a4d08d6',
};

const firebaseApp = initializeApp(firebaseConfig);

// google class provider and authorization object are paramaters for the google popup
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// takes data from sign-in component(authentication object is userAuth) and stores in firestore
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  // at this time, this document doesn't exist but is now referenced by the 'users' path and the uid
  // we can set and get data based on this reference
  const userDocRef = doc(db, 'users', userAuth.uid);

  // lets get the data from this document with a snapshot
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // set data from auth object 
  // else return data
  if(!userSnapshot.exists()) {
    // create/destructure variables to set a user document 
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    // user document is set in the database
    try {
      await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation
    });
  } catch(error) {
      console.log('error creating the user', error.message);
    }
    console.log(userSnapshot);
    return userSnapshot;
  }
}

/*********
 Authenticating email and password sign up (not google popup)
 *********/
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!(email || password)) return
  return await createUserWithEmailAndPassword(auth, email, password);
}














