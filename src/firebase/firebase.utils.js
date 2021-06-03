import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBL8djSwtNtudFrnDak4nNG-KFI85-enSA',
  authDomain: 'e-commerce-demo-website.firebaseapp.com',
  projectId: 'e-commerce-demo-website',
  storageBucket: 'e-commerce-demo-website.appspot.com',
  messagingSenderId: '562005819275',
  appId: '1:562005819275:web:0fd06890601a20d249b98e',
  measurementId: 'G-7LBBNPFE9Q',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: 'user@example.com',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
