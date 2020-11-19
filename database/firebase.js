import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA7lycZNQtkgGsnB84_pB4Xf_qTtVUqe6A",
    authDomain: "react-native-crud-c6779.firebaseapp.com",
    databaseURL: "https://react-native-crud-c6779.firebaseio.com",
    projectId: "react-native-crud-c6779",
    storageBucket: "react-native-crud-c6779.appspot.com",
    messagingSenderId: "147777819779",
    appId: "1:147777819779:web:7fabddd0112ddb173277b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default {
    firebase,
    db
}