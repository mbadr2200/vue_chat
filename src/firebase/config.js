import firebase from "firebase/app";
import "firebase/firestore" ;
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDWyVFHYBYQvb-tyWYJWOGApA3_CGKMsWM",
    authDomain: "vue-live-chat-3275b.firebaseapp.com",
    projectId: "vue-live-chat-3275b",
    storageBucket: "vue-live-chat-3275b.appspot.com",
    messagingSenderId: "403041029652",
    appId: "1:403041029652:web:0a22ab05ac6ce42e2de101"
  };

  // init the app 

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore() ;
  const projectAuth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp ; 

  export { projectFirestore ,timestamp , projectAuth}
