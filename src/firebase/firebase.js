import firebase from 'firebase/app';
import 'firebase/auth';

import { APICONFIG } from './api-config';


// Firebase Config
const config = {
  apiKey: APICONFIG.apiKey,
  authDomain: APICONFIG.authDomain,
  databaseURL: APICONFIG.databaseURL,
  projectId: APICONFIG.projectId,
  storageBucket: APICONFIG.storageBucket,
  messagingSenderId: APICONFIG.messagingSenderId,
};

// Initialize it if it is not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Initialize the auth object
const auth = firebase.auth();

export { auth };
