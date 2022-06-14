// !!
// !! GET 1 doc
// !!
import {getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {contactsCol, getFirebase} from '../clientFirebase'
import {
	doc,
	updateDoc,
	getDocs,
	addDoc,
	serverTimestamp,
	query,
	where,
	orderBy,
	getDoc,
	deleteDoc,
	setDoc,
	collection,
	type WhereFilterOp,
	type WithFieldValue,
	type DocumentData
} from 'firebase/firestore'
/**
 * @param col
 * @param id
 * @param caller
 * @returns NULL if the ID does not refers to a doocument, or return the ENTITY
 */
export const dao_getDoc = async (col: string, id: string, caller: string = '') => {
	try {
		console.log(caller + ' ⚡ STARTING [GET]')
		const {firestore} = getFirebase()
		const docRef = doc(firestore, col, id)
		const qSnap = await getDoc(docRef)

		if (qSnap.exists()) {
			const entity = {id: qSnap.id, ...qSnap.data()}
			console.log(caller + ' ⚡✅ GET > [', col, '/', qSnap.id, ' === ', id, ']')
			// --- const contact = qSnap2.data();
			// --- console.log(contact.toString());
			// --- console.log(`🐬 -' : ${JSON.stringify(docRef2, null, 4)}`);
			return entity
		} else {
			// doc.data() will be undefined in this case
			console.log(caller + ' ⚡⚠️  GET > No such document! > [', col, '/', id, ']')
			return null
		}
	} catch (e) {
		console.error(caller + ' ⚡❌ GET - details > COLLECTION_PATH: ', col)
		console.error(caller + ' ⚡❌ GET - details > DOC_ID: ', id)
		console.error(caller + ' ⚡❌ GET - catched > Error getting one Firebase-document / ', e)
	}
}

// export const dao_getDoc = async (col: string, id: string, caller: string = '') => {
// 	try {
// 		console.log(caller + ' ⚡ STARTING [GET]')
// 		const {firestore} = getFirebase()
// 		const docRef = doc(firestore, col, id)
// 		// --- const docRef2 = doc(firestore, col, id).withConverter(contactConverter)
// 		// const qSnap2 = await getDoc(docRef2)
// 		const qSnap = await getDoc(docRef)
// 		if (qSnap.exists()) {
// 			const entity = {id: qSnap.id, ...qSnap.data()}
// 			console.log(caller + ' ⚡✅ GET > [', col, '/', qSnap.id, ' === ', id, ']')
// 			// --- const contact = qSnap2.data();
// 			// --- console.log(contact.toString());
// 			// --- console.log(`🐬 -' : ${JSON.stringify(docRef2, null, 4)}`);
// 			return entity
// 		} else {
// 			// doc.data() will be undefined in this case
// 			console.log(caller + ' ⚡⚠️  GET > No such document! > [', col, '/', id, ']')
// 			return null
// 		}
// 	} catch (e) {
// 		console.error(caller + ' ⚡❌ GET - details > COLLECTION_PATH: ', col)
// 		console.error(caller + ' ⚡❌ GET - details > DOC_ID: ', id)
// 		console.error(caller + ' ⚡❌ GET - catched > Error getting one Firebase-document / ', e)
// 	}
// }
