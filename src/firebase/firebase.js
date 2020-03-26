import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKDDAXbd42K_EIRyf1lV53C9eKdYjCWME",
    authDomain: "expensify-96269.firebaseapp.com",
    databaseURL: "https://expensify-96269.firebaseio.com",
    projectId: "expensify-96269",
    storageBucket: "expensify-96269.appspot.com",
    messagingSenderId: "691779124646",
    appId: "1:691779124646:web:8abe142ecb8b7ff5bba367",
    measurementId: "G-22Z256P5X9"
  };

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Dhairya',
    age: 20,
    isSingle: true
});

firebase.database().ref().set("This is my data");