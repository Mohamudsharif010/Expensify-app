import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });
// //   console.log(expenses);
// // });

// database.ref('expenses').push({
//   description: 'Phone',
//   note: 'This is for this phone bill',
//   amount: 100,
//   createdAt: 1000,
// });

// // database.ref('notes').push({
// //   title: 'Course topics',
// //   body: 'React Native, Vue, Angular, Python',
// // });

// // database.ref('notes/-MDFDmPx8RSNCECqsfxE').remove();
// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(
// //     `${val.name} is a ${val.job.title} at ${val.job.company}.`
// //   );
// // });

// // const onValueChange = database.ref().on(
// //   'value',
// //   (snapshot) => {
// //     console.log(snapshot.val());
// //   },
// //   (e) => {
// //     console.log('Error with data fetching', e);
// //   }
// // );

// // setTimeout(() => {
// //   database.ref('age').set(24);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(25);
// // }, 10500);

// // database
// //   .ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: 'Mohamud Sharif',
// //     age: 24,
// //     stressLevel: 6,
// //     job: {
// //       title: 'Front end developer',
// //       company: 'Google Brain Team',
// //     },
// //     location: {
// //       city: 'Nairobi',
// //       country: 'Kenya',
// //     },
// //   })
// //   .then(() => {
// //     console.log('Data is saved!');
// //   })
// //   .catch((e) => {
// //     console.log('This failed.', e);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Mombasa',
// // });

// // database
// //   .ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Remove succeeded!');
// //   })
// //   .catch((e) => {
// //     console.log('Remove failed', e);
// //   });
