import type {FirebaseApp} from 'firebase/app'
import {initializeApp, getApps, getApp} from 'firebase/app'
import {
	getAuth,
	isSignInWithEmailLink,
	sendSignInLinkToEmail,
	signInWithEmailLink,
	onAuthStateChanged
} from 'firebase/auth'
import {
	collection,
	query,
	orderBy,
	onSnapshot,
	addDoc,
	serverTimestamp,
	enableMultiTabIndexedDbPersistence
} from 'firebase/firestore'
import {getFirebase} from './clientFirebase'

export const isMagicLink = (link: string) => {
	// const auth = getAuth(getClientApp())
	const {auth} = getFirebase()
	return isSignInWithEmailLink(auth, link)
}
export const signInWithMagicLink = (email: string, link: string) => {
	// const auth = getAuth(getClientApp())
	const {auth} = getFirebase()
	return signInWithEmailLink(auth, email, link)
}
export const sendMagicLink = (email: string, redirectUrl: string) => {
	// const auth = getAuth(getClientApp())
	const {auth} = getFirebase()
	const actionCodeSettings = {
		url: redirectUrl,
		handleCodeInApp: true
	}
	return sendSignInLinkToEmail(auth, email, actionCodeSettings)
}
// !!!!!!!! east
export function streamMessages({caseId}) {
	// const {firestore} = getFirebase()
	// const messagesCol = collection(firestore, 'supportCases', caseId, 'messages')
	// const messageQuery = query(messagesCol, orderBy('timestamp'))
	// const stream = (callback) =>
	// 	onSnapshot(messageQuery, (snapshot) => {
	// 		const messages = snapshot.docs.map((doc) => {
	// 			const isDelivered = !doc.metadata.hasPendingWrites
	// 			return {
	// 				isDelivered,
	// 				id: doc.id,
	// 				...doc.data()
	// 			}
	// 		})
	// 		callback(messages)
	// 	})
	// const addMessage = (message) =>
	// 	addDoc(messagesCol, {
	// 		timestamp: serverTimestamp(),
	// 		...message
	// 	})
	// return {stream, addMessage}
}
export function onAuth(callback) {
	const {auth} = getFirebase()
	return onAuthStateChanged(auth, (user) => {
		console.log(user)
		callback(user)
	})
}
