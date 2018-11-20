  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2sZhOON5p71_uC-McslhTsMZITVzgGuI",
    authDomain: "naija-chat-887ee.firebaseapp.com",
    databaseURL: "https://naija-chat-887ee.firebaseio.com",
    projectId: "naija-chat-887ee",
    storageBucket: "naija-chat-887ee.appspot.com",
    messagingSenderId: "116060365972"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

//export firestore database
  export default firebaseApp.firestore()