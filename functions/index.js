const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// Config file
admin.initializeApp(functions.config().firebase);

exports.addUserMessages = functions.database.ref(`messages/{messageId}`).onWrite(event=>{
    const messageKey = event.data.key;
    const messageValue = event.data.val();
console.log(messageValue);
admin.database().ref(`/user-messages/${messageValue.userFromId}/${messageValue.userToId}`).child(messageKey).set(1);
    admin.database().ref(`/user-messages/${messageValue.userToId}/${messageValue.userFromId}`).child(messageKey).set(1);
});