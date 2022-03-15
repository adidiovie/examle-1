import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 
  apiKey: "AIzaSyCCqEsgelZcY85B-UN1bz4B9B_ErmRTu6o",
  authDomain: "react-contact-form-14dea.firebaseapp.com",
  projectId: "react-contact-form-14dea",
  storageBucket: "react-contact-form-14dea.appspot.com",
  messagingSenderId: "109189196142",
  appId: "1:109189196142:web:33928fbfff34aa2864b97f"
});

var db firebaseApp.firestore();
export {db};