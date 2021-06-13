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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    try {
      await userRef.set({
        displayName: userAuth.displayName,
        email: userAuth.email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (error) {
      console.log('error: ', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionnRef = firestore.collection(collectionKey);
  // console.log('collectionnRef: ', collectionnRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionnRef.doc();
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title).toLowerCase(),
      title,
      id: doc.id,
      items,
    };
  });
  // console.log(transformedCollections);
  return transformedCollections.reduce((accum, elem) => {
    accum[elem.title.toLowerCase()] = elem;
    return accum;
  }, {});
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);
