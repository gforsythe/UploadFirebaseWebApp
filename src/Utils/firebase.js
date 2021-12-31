// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs, query} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCybGgduoYic_qyPskblIk4_wxSw6YHLbA",
  authDomain: "fir-practicecoursereact.firebaseapp.com",
  projectId: "fir-practicecoursereact",
  storageBucket: "fir-practicecoursereact.appspot.com",
  messagingSenderId: "1032665743536",
  appId: "1:1032665743536:web:00c81f4777e942374e7b75",
  measurementId: "G-FZNFGJV0ZY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);

//const carRef = collection(db, "cars");
//data
// getDocs(carRef).then( snapshot => {
// console.log(snapshot.docs.map(doc => doc.data()));
// });
//id
// getDocs(carRef).then(snapshot => {
//   snapshot.docs.forEach((doc => {
//     console.log(`This is the id ${doc.id}`);
//   }));
// })

export default firebaseApp;


