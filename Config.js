import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBB1QrVCek4tm41fqNHmtQvLL8unRFr9aA",
    authDomain: "wireless-liberary.firebaseapp.com",
    databaseURL: "https://wireless-liberary.firebaseio.com",
    projectId: "wireless-liberary",
    storageBucket: "wireless-liberary.appspot.com",
    messagingSenderId: "180514280479",
    appId: "1:180514280479:web:f5d2bc464fd2dc5ddf712a"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default firebase.firestore();
