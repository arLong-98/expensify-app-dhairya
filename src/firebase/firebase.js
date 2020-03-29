import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:  process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId:  process.env.FIREBASE_PROJECT_ID,
    storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.FIREBASE_APP_ID,
    measurementId:  process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase ,googleAuthProvider ,database as default };





//-----------------------------------------------------------------------------------------------------------------------------------
// //child_removed event
// firebase.database()
// .ref('expenses')
// .on('child_removed',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed event
// firebase.database()
// .ref('expenses')
// .on('child_changed',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// });




// firebase.database()
// .ref('expenses')
// .once('value')
// .then((snapshot)=>{
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
  
//   console.log(expenses);
// });


// firebase.database()
// .ref('expenses')
// .on('value',(snapshot)=>{
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });


// firebase.database().ref('expenses').push({
//   description:'House rent',
//   note:'',
//   amount:1000,
//   createdAt:'12 march'
// });




// firebase.database().ref('notes/-M3MdGMxmiRSVKUp3v3z').update({
//   body:'buy food'
// });


// firebase.database().ref('notes').push({
//   title: 'To-Do',
//   body: 'Workout'
// });

// const onValueChange = firebase.database()
//                       .ref()
//                       .on('value',(snapshot)=>{
//                         console.log(snapshot.val());
//                       },(e)=>{
//                         console.log('error fetching data', e);
//                       });

// firebase.database()
// .ref()
// .on('value',(snapshot)=>{
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// },(e)=>{
//   console.log('error fetching data', e);
// });

// firebase.database().ref('location')
// .once('value')
// .then((snapshot)=>{
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e)=>{
//   console.log('error fetching data', e);
// })


// firebase.database().ref().set({
//     name: 'Dhairya',
//     age: 20,
//     stressLevel:4,
//     job:{
//       title:'SDE',
//       company:'ThingsGoSocial'
//     },
//     location:{
//       city:'Unnao',
//       country:'India'
//     }
// }).then(()=>{
//   console.log('Data saved');
// }).catch((e)=>{
//   console.log('Failed', e);
// });

// firebase.database().ref().update({
//   'job/company':'Oracle',
//   stressLevel: 7,
//   'location/city':'Delhi'
// });

// firebase.database().ref('isSingle')
// .remove()
// .then(()=>{
//   console.log('removed!');
// }).catch((e)=>{
//   console.log('error',e);
// });
