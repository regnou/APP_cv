import {
	// createUserWithEmailAndPassword,
	signInWithEmailAndPassword
	// getRedirectResult,
	// signInWithRedirect,
	// signInWithPopup
	// GoogleAuthProvider
} from 'firebase/auth';
/**
 *
 * @param {*} AUTH
 */
async function signinWithGoogle(AUTH) {
	// try {
	// const provider = new GoogleAuthProvider();
	// await signInWithRedirect(provider);
	// // await AUTH.signInWithPopup(provider);
	// } catch (e) {
	// console.log(e);
	// }
	// => https://firebase.google.com/docs/auth/web/google-signin
	// signInWithPopup(auth, provider)
	// .then((result) => {
	// // This gives you a Google Access Token. You can use it to access the Google API.
	// const credential = GoogleAuthProvider.credentialFromResult(result);
	// const token = credential.accessToken;
	// // The signed-in user info.
	// const user = result.user;
	// // ...
	// }).catch((error) => {
	// // Handle Errors here.
	// const errorCode = error.code;
	// const errorMessage = error.message;
	// // The email of the user's account used.
	// const email = error.email;
	// // The AuthCredential type that was used.
	// const credential = GoogleAuthProvider.credentialFromError(error);
	// // ...
	// });
}
/**
 *
 * @param {*} AUTH
 * @param {*} mail
 * @param {*} pwd
 */
export function signinWithMail(AUTH, mail, pwd) {
	signInWithEmailAndPassword(AUTH, mail, pwd)
		// 0 si il est connecte, rien ne se passe
		// .then((userCredential) => {
		// const user = userCredential.user;
		// ...
		// })
		.catch((error) => {
			window.alert('YOU ARE NOT REGISTERED or PASSWORD IS INCORRECT');
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('AX:: ' + errorCode, ' : ', errorMessage);
		});
}
/**
 *
 * @param {*} AUTH
 * @returns
 */
export function getCurrentUser(AUTH) {
	const user = AUTH.currentUser;
	if (user !== null) {
		// The user object has basic properties such as display name, email, etc.
		const displayName = user.displayName; // 3
		const email = user.email; // 3
		const photoURL = user.photoURL; // 3
		const emailVerified = user.emailVerified; // 3

		// The user's ID, unique to the Firebase project. Do NOT use
		// this value to authenticate with your backend server, if
		// you have one. Use User.getToken() instead.
		const uid = user.uid;
		return {
			uid,
			displayName,
			email,
			photoURL,
			emailVerified,
			loggedIn: true
		};
	}
}
/**
 *
 */
export function getCurrentUserProvider() {
	// const user = AUTH.currentUser;
	// if (user !== null) {
	// user.providerData.forEach((profile) => {
	//   console.log("Sign-in provider: " + profile.providerId);
	//   console.log("  Provider-specific UID: " + profile.uid);
	//   console.log("  Name: " + profile.displayName);
	//   console.log("  Email: " + profile.email);
	//   console.log("  Photo URL: " + profile.photoURL);
	// });
	// }
}
/**
 *
 */
export function editUser() {
	// const auth = getAuth();
	// updateProfile(AUTH.currentUser, {
	// displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
	// }).then(() => {
	// // Profile updated!
	// // ...
	// }).catch((error) => {
	// // An error occurred
	// // ...
	// });
}
/**
 *
 * @param {*} mail
 * @param {*} pwd
 */
export function signup(mail, pwd) {
	// createUserWithEmailAndPassword(AUTH, email, password)
	// .then((userCredential) => {
	//   // AXEL TODO
	//   // ADD new user in DATABASE. ? or table user from firebase auth
	//   //
	//   // Signed in
	//   const user = userCredential.user;
	//   // ...
	// })
	// .catch((error) => {
	//   const errorCode = error.code;
	//   const errorMessage = error.message;
	//   // ..
	// });
}
/**
 *
 */
export function signout() {
	// signOut(AUTH)
	//   .then(() => {
	//   // Sign-out successful.
	//   }).catch((error) => {
	//   // An error happened.
	//   });
}
/**
 *
 */
export function singinGoogleRedirect() {
	// getRedirectResult(auth)
	// .then((result) => {
	//   // This gives you a Google Access Token. You can use it to access Google APIs.
	//   const credential = GoogleAuthProvider.credentialFromResult(result);
	//   const token = credential.accessToken;
	//   // The signed-in user info.
	//   const user = result.user;
	// }).catch((error) => {
	//   // Handle Errors here.
	//   const errorCode = error.code;
	//   const errorMessage = error.message;
	//   // The email of the user's account used.
	//   const email = error.email;
	//   // The AuthCredential type that was used.
	//   const credential = GoogleAuthProvider.credentialFromError(error);
	//   // ...
	// });
}
export { signinWithGoogle };
