 import {initializeApp} from 'firebase';

 const app= initializeApp({
   
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
 
