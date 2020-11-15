import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
  // api_key
  apiKey: "AIzaSyDCYPgLjlChuJbC-FMGyNOYkaao8ULyYWE",

  // storage_bucket ID
  authDomain: "reactnativefirebase-ec822.appspot.com",
  
  // firebase_url
  databaseURL: "https://reactnativefirebase-ec822.firebaseio.com",
  
  // project_id
  projectId: "reactnativefirebase-ec822",
  
  // storage_bucket
  storageBucket: "reactnativefirebase-ec822.appspot.com",

  // project_number
  messagingSenderId: "154770876179",

  // mobilesdk_app_id
  appId: "1:154770876179:android:10714512d67f9f26a8dce6",
};

firebase.initializeApp(config);
firebase.firestore();
// const usersCollection = firestore().collection('Users');

export default firebase;