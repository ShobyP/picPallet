import * as firebase from "firebase";
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzXpDbO0i2N949P8R8te9YZF_IgDY9O_M",
    authDomain: "picpallet.firebaseapp.com",
    databaseURL: "https://picpallet.firebaseio.com",
    projectId: "picpallet",
    storageBucket: "picpallet.appspot.com",
    messagingSenderId: "622693450790",
    appId: "1:622693450790:web:297f7fc99a9789306492e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, projectStorage, timeStamp } ;