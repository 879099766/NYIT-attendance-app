import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = {
  // API Key
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",

  // storage_bucket ID
  authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxbase-ec822.appspot.com",
  
  // firebase_url
  databaseURL: "https://xxxxxxxxxxxxxxxxxxxxxxxxxbase-ec822.firebaseio.com",
  
  // project_id
  projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxbase-ec822",
  
  // storage_bucket
  storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxbase-ec822.appspot.com",

  // project_number
  messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxx",

  // mobilesdk_app_id
  appId: "1:xxxxxxxxxxxxxxxxxxxxxxxxx:android:xxxxxxxxxxxxxxxxxxxxxxxxx",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;