import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAAC1JbJ2FDfFlISoe_b7MQKFbh8Fv2X78",
    authDomain: "auth-firebase-40cbb.firebaseapp.com",
    projectId: "auth-firebase-40cbb",
    storageBucket: "auth-firebase-40cbb.appspot.com",
    messagingSenderId: "948694296283",
    appId: "1:948694296283:web:75df4a22afac88e6064efe"
  };
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;