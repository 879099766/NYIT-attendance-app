import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDCYPgLjlChuJbC-FMGyNOYkaao8ULyYWE",
  authDomain: "reactnativefirebase-ec822.appspot.com",
  databaseURL: "https://reactnativefirebase-ec822.firebaseio.com",
  projectId: "reactnativefirebase-ec822",
  storageBucket: "reactnativefirebase-ec822.appspot.com",
  messagingSenderId: "154770876179",
  appId: "1:154770876179:android:10714512d67f9f26a8dce6",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;