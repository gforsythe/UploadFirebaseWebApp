// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collectionGroup, getDocs, query, doc} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);

// one way to get ub collections: site -> employees -> admin -> data
// export const subCollection = getDocs(collectionGroup(db, "admin")).then(snapshot =>{
//   snapshot.docs.forEach((doc => {
//     console.log(`This is the id:${doc.id}`,"This is the data",doc.data());
//   }));
// });


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


