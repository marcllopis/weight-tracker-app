import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase Config
const config = {
  apiKey: 'AIzaSyDQ_77Qj8E7gL8icH-yHgfWlG6VCL3j_34',
  authDomain: 'weight-tracker-app-5f322.firebaseapp.com',
  databaseURL: 'https://weight-tracker-app-5f322.firebaseio.com',
  projectId: 'weight-tracker-app-5f322',
  storageBucket: 'weight-tracker-app-5f322.appspot.com',
  messagingSenderId: '554252733203',
};

// Initialize it if it is not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Initialize the auth object
const auth = firebase.auth();

export { auth };
