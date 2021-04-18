import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';

//seed database

//config file
const config = {
    apiKey: "AIzaSyBqR-cJELbOhGqNn7N3vJg8Qq23zfqv2Mk",
    authDomain: "netflix-clone-43e95.firebaseapp.com",
    projectId: "netflix-clone-43e95",
    storageBucket: "netflix-clone-43e95.appspot.com",
    messagingSenderId: "329470195071",
    appId: "1:329470195071:web:5af9bab1a90e6d7e6ed64a"
  };

const firebase = Firebase.initializeApp(config);


//seed database
// seedDatabase(firebase);

export {firebase};