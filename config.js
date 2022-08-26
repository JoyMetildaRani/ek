import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyA3MXQnP3rJSl3grBpO9mAnc3B7D-6C5ro",
  authDomain: "mypro-461be.firebaseapp.com",
  databaseURL: "https://mypro-461be-default-rtdb.firebaseio.com",
  projectId: "mypro-461be",
  storageBucket: "mypro-461be.appspot.com",
  messagingSenderId: "675553262566",
  appId: "1:675553262566:web:04d16cf7aebd745ce63427"
};
 if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
 }

 
export default firebase.firestore()
