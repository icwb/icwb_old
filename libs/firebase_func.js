const fbaseAdmin = require('firebase-admin');
const serviceAccount = require('./lib/firebase_credential/iwb2030-firebase-adminsdk-d2ta1-59ff465701.json');
fbaseAdmin.initializeApp({
    credential: fbaseAdmin.credential.cert(serviceAccount),
    databaseUrl: ''
});
const db = fbaseAdmin.firestore(); 