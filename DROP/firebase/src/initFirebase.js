import {initializeApp} from 'firebase/app'
import {getFirestore, connectFirestoreEmulator} from 'firebase/firestore' // connectFirestoreEmulator
// import { getStorage } from 'firebase/storage';
// import { getAuth } from 'firebase/auth'; // connectAuthEmulator
// import firebaseConfig from "./env"; // 2 TODO - with env
// -0 WEB AG 2
const FB_CONFIG = {
	apiKey: 'AIzaSyAT_2RmimFke9LX3wVypqp5eZRUwC6ScFc',
	authDomain: 'webagency2-app.firebaseapp.com',
	projectId: 'webagency2-app',
	storageBucket: 'webagency2-app.appspot.com',
	messagingSenderId: '196991542058',
	appId: '1:196991542058:web:3f78d2d8191a2a3d6a3453',
	measurementId: 'G-ZFZHQPZ3JZ'
}
const FIREBASE_INSTANCE = initializeApp(FB_CONFIG) // -0;
let FB_DB = getFirestore() // -0
const IS_FIREBASE_EMULATOR = false // -3 PROD
// const IS_FIREBASE_EMULATOR = true; // -2 LOCAL : SEUL POINT DE CONFIG !!!
if (IS_FIREBASE_EMULATOR) {
	// console.log('🗺️ emulator starts 🗺️');
	connectFirestoreEmulator(FB_DB, 'localhost', 8080) // LOCAL
}
// const FB_STORAGE = null;
const FB_AUTH = null
// FB_STORAGE = getStorage(FIREBASE_INSTANCE);
// FB_AUTH = getAuth(FIREBASE_INSTANCE);
/**
 *
 * @param {*} IS_FIREBASE_EMULATOR
 */
function initFirebase(IS_FIREBASE_EMULATOR) {
	if (!FIREBASE_INSTANCE) {
		try {
			FB_DB = getFirestore()
		} catch (error) {
			console.error(error)
		}
		if (IS_FIREBASE_EMULATOR) {
			console.log('🗺️ emulator starts 🗺️')
			connectFirestoreEmulator(FB_DB, 'localhost', 8080) // LOCAL
		}
		// FB_STORAGE = getStorage(FIREBASE_INSTANCE);
		// FB_AUTH = getAuth(FIREBASE_INSTANCE);
		console.log('🌸⚡🌸⚡🌸⚡ FIREBASE APP SUCCESSFULLY INITIALIZED')
	}
}
/**
 *
 */
function getFbDb() {
	if (FB_DB) {
		return FB_DB
	} else {
		if (IS_FIREBASE_EMULATOR) {
			initFirebase(IS_FIREBASE_EMULATOR)
		} else {
			initFirebase()
		}

		return FB_DB
	}
}
/**
 *
 * @returns
 */
// function getFbStorage() {
// if (FB_STORAGE) return FB_STORAGE; else {
//   initFirebase(); return FB_STORAGE;
// };
// }
/**
 *
 * @returns
 */
function getFbAuth() {
	// uncomment it when you will use AUTH
	if (FB_AUTH) return FB_AUTH
	else {
		initFirebase()
		return FB_AUTH
	}
}
export {
	getFbAuth,
	getFbDb
	// getFbStorage,
}
