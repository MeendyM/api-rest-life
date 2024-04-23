const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const admin = require('firebase-admin');
///const serviceAccount = require('../../../secretes/life-check-6f31f-firebase-adminsdk-tqj8f-eb1be14d5a.json');
const serviceAccount = process.env.SERVICE_ACCOUNT_PATH;

// Configuración de Firebase
const firebaseConfig = {
 
};

// Inicialización de la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Inicialización de Firestore con la configuración
const db = getFirestore(app);

// Inicialización de Firebase Admin con las credenciales
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {  db, admin };
