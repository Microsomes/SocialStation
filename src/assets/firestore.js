 import {initializeApp} from 'firebase';

 const app= initializeApp({
     apiKey: "AIzaSyBpxEGAE8qmYxx3GuaZbO8OHYNam1gXHD0",
     authDomain: "social-station-69cfc.firebaseapp.com",
     databaseURL: "https://social-station-69cfc.firebaseio.com",
     projectId: "social-station-69cfc",
     storageBucket: "social-station-69cfc.appspot.com",
     messagingSenderId: "442763963102"
 });

app.firestore().settings({
    timestampsInSnapshots:true
});



export const db= app.firestore();
 //exporting the database
export const auth= app.auth();
//exporting auth 
export const storage= app.storage();
//exporting the storage sdk
 