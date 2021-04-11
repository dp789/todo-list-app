import firebase from 'firebase'

// replace this with your credentials
const firebaseConfig = {
    apiKey: "AIzaSyBuq91O3IXe8hDJIjWsBt4ADq_X0Qqbv2g",
    authDomain: "todoapp-a1018.firebaseapp.com",
    projectId: "todoapp-a1018",
    storageBucket: "todoapp-a1018.appspot.com",
    messagingSenderId: "980821943049",
    appId: "1:980821943049:web:cf6f6ec3b46181fae6e9d8",
    measurementId: "G-93TWG0Z2NW"
  };
// ----------------------------------------//

const fire = firebase.initializeApp(firebaseConfig);
export default fire;