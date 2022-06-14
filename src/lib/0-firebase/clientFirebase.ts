import {initializeApp, getApps, type FirebaseApp} from 'firebase/app'
import {
	getFirestore,
	connectFirestoreEmulator,
	enableMultiTabIndexedDbPersistence,
	CollectionReference,
	collection,
	type DocumentData,
	Firestore
} from 'firebase/firestore'
import {
	getAuth,
	connectAuthEmulator,
	setPersistence,
	inMemoryPersistence,
	type Auth
} from 'firebase/auth'

// -- Import all your model types
import type {Contact} from './dao/types/Contact'

const firebaseConfig = {
	// ---- TEST
	apiKey: 'AIzaSyAJko4m_wqMJI5jUcEOsiQynCUGC-YpdKc',
	authDomain: 'firestore-ax-test.firebaseapp.com',
	projectId: 'firestore-ax-test'
	// -------- TIN
	// apiKey: 'AIzaSyCIFKC20rq6kAglerGHVLQDDqFBrzjmx0M',
	// authDomain: 'tinax-app.firebaseapp.com'
	// projectId: 'tinax-app',
	// ------ VITE
	// apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	// authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	// projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
}

// -- all your collections
export let contactsCol: CollectionReference<Contact>

// !!!!!!!! INIT ALL TYPES, COLLECTION, FIREBASE INSTANCE
getFirebase()
// !!!!!!!!

function initializeServices() {
	const isConfigured = getApps().length > 0
	const firebaseApp = initializeApp(firebaseConfig)
	const firestore = getFirestore(firebaseApp)
	const auth = getAuth(firebaseApp)
	// setPersistence(auth, inMemoryPersistence) // --?
	return {firebaseApp, firestore, auth, isConfigured}
}

// const createCollection =
// 	(firestore: any) =>
// 	<T = DocumentData>(collectionName: string) => {
// 		return collection(firestore, collectionName) as CollectionReference<T>
// 	}

// function initAllCol(firestore: Firestore) {
// 	contactsCol = createCollection(firestore)<Contact>('contacts')
// }

// -------- This is just a helper to add the type to the db responses
function initAllCol(firestore: Firestore) {
	const createCollection = <T = DocumentData>(collectionName: string) => {
		return collection(firestore, collectionName) as CollectionReference<T>
	}
	contactsCol = createCollection<Contact>('contacts')
}

export function getFirebase() {
	console.log('🔥🔥🔥 -> initializing FIREBASE')
	const services = initializeServices()
	if (!services.isConfigured) {
		initAllCol(services.firestore)
		connectToEmulators(services)
		// enableMultiTabIndexedDbPersistence(services.firestore)
	}
	return services
}

function connectToEmulators({auth, firestore}: any) {
	// --- TODO - decide if PROD or LOCAL
	// if (false) {
	if (true) {
		// if (location.hostname === 'localhost') {
		console.log('🟨 ######### USING LOCAL EMULATOR ##########')
		connectFirestoreEmulator(firestore, 'localhost', 8080)
	} else {
		console.log('🟨🟨 ######### USING PRODUCTION ##########')
	}
}
