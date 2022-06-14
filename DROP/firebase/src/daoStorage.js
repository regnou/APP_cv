import {
	ref,
	// uploadBytes,
	getDownloadURL,
	uploadBytesResumable
} from 'firebase/storage'
import {add} from './dao.js' // to add img UID
/**
 *
 * @param {*} STORAGE
 * @param {*} YOUR_FILE_OR_BLOB
 * @returns
 */
async function upload(STORAGE, YOUR_FILE_OR_BLOB) {
	return new Promise(async function (resolve, reject) {
		console.log('>>>>>>> UPLOAD BLOB/FILES STARTS >>>>>>>>>>>>>')
		// HERE, create a unique ID for the img, or it will be erased !!!
		const uid = await add('img', YOUR_FILE_OR_BLOB.name)
		// HERE, create a unique ID for the img, or it will be erased !!!
		const YOUR_STORAGE_PATH = '/img/userId/' + uid
		// const YOUR_STORAGE_PATH = '/img/userId/' + YOUR_FILE_OR_BLOB.name;
		const storageRef = ref(STORAGE, YOUR_STORAGE_PATH)
		const uploadTask = uploadBytesResumable(storageRef, YOUR_FILE_OR_BLOB)
		//  uploadBytes(storageRef, file); //
		// async function uploadTaskPromise() {
		// return new Promise(function (resolve, reject) {
		// const storageRef = storage.ref(YOUR_STORAGE_PATH)
		// const uploadTask = storageRef.put(YOUR_FILE_OR_BLOB)
		uploadTask.on(
			'state_changed',
			function (snapshot) {
				// 0
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				console.log('Upload is ' + progress + '% done')
			},
			function error(err) {
				// 0
				console.log('error', err)
				reject()
			},
			function complete() {
				// 0
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log('File available at', downloadURL)
					console.log('yoooo c gagneéééé')
					resolve(downloadURL)
				})
				// uploadTask.snapshot
				// const storage = firebase.storage();
				// return await storage.ref(path).getDownloadURL();
				// uploadTask.snapshot.getDownloadURL()
				// .then(function (downloadURL) {
				//   console.log("yoooo c gagneéééé");
				//   resolve(downloadURL)
				// })
				// STORAGE
				// .ref(storagePath)
				// .getDownloadURL()
				// .then(function (downloadURL) {
				//   console.log("yoooo c gagneéééé");
				//   resolve(downloadURL)
				// });
			}
		)
	})
}
/**
 *
 * @param {*} storagePath
 * @returns
 */
async function download(storagePath) {
	// const storageRef = ref(STORAGE, file);
	// a remettre, je comment car STORAGE n st pas def comme var globale
	// return await STORAGE
	// .ref(storagePath)
	// .getDownloadURL();
}

export {download, upload}
// const storageUrl = await uploadTaskPromise()
// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
// uploadTask.on('state_changed',
// (snapshot) => {
//   // Observe state change events such as progress, pause, and resume
//   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//   console.log('Upload is ' + progress + '% done');
//   switch (snapshot.state) {
//   case 'paused':
//   console.log('Upload is paused');
//   break;
//   case 'running':
//   console.log('Upload is running');
//   break;
//   }
// },
// (error) => {
//   // Handle unsuccessful uploads
//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//   case 'storage/unauthorized':
//   // User doesn't have permission to access the object
//   break;
//   case 'storage/canceled':
//   // User canceled the upload
//   break;
//   // ...
//   case 'storage/unknown':
//   // Unknown error occurred, inspect error.serverResponse
//   break;
//   }
// },
// () => {
//   // Handle successful uploads on complete
//   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//   const downloadURL = getDownloadURL(uploadTask.snapshot.ref)
//   .then((downloadURL) => {
//   console.log('[x] Uploaded a blob or file!');
//   console.log('File available at', downloadURL);
//   console.log(">>>>>>> UPLOAD END >>>>>>>>>>>>>");
//   return downloadURL;
//   });
//   return downloadURL;
// }
// );
// .then((snapshot) => {
// console.log('Uploaded a blob or file!');
// });
// const mainPicturePath = storagePath;
// const mainPicturePath = `/${userId}/${recipeId}.${pic.name.split(".").pop()}`;
// const storage = firebase.storage();
// const ref = ref(STORAGE, storagePath);
// await ref.put(file);
// return storagePath;
// }
// const uploadFile = async (recipeId: string, userId: string, pic: File) => {
// const mainPicturePath = `/${userId}/${recipeId}.${pic.name.split(".").pop()}`;
// const storage = firebase.storage();
// const ref = storage.ref(mainPicturePath);
// await ref.put(pic);
// return mainPicturePath;
// };
// export const getUrl = async (path: string) => {
// const storage = firebase.storage();
// return await storage.ref(path).getDownloadURL();
// };
