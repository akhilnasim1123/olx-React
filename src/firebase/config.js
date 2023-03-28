import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlR9XavF7KydL_thfoAzIDymUEBO9EhcQ",
  authDomain: "fir-971eb.firebaseapp.com",
  projectId: "fir-971eb",
  storageBucket: "fir-971eb.appspot.com",
  messagingSenderId: "353528357109",
  appId: "1:353528357109:web:4398e316073639a95a25bc",
  measurementId: "G-TXDTX7QPXB"
};

 export default firebase.initializeApp(firebaseConfig)
