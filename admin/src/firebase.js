import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFJakn0IpYXh6UFGTWfB9HuZtwvzFBGM8",
  authDomain: "weverse-ab830.firebaseapp.com",
  projectId: "weverse-ab830",
  storageBucket: "weverse-ab830.appspot.com",
  messagingSenderId: "881641358570",
  appId: "1:881641358570:web:298461ab5e73364ac70393",
  measurementId: "G-GSQ6K1FYL9"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
