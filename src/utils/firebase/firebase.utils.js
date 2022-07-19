import { initializeApp } from 'firebase/app';
//firebase/app brings down a suite of tools from the library
//initializeApp creates our own instance of firebase

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
