// -2 DAO
// -2 dans cette couche, on ne parle que d'entities...
// -2 je renvoie tjs UNE ou DES entites...
import Entity from './Entity.js'
import {getFbDb} from './initFirebase.js'
import {
	query,
	where,
	collection,
	doc,
	addDoc,
	setDoc,
	getDoc,
	getDocs,
	deleteDoc
	// limit,
	// orderBy,
} from 'firebase/firestore'

const DB = getFbDb()

// -0
// -0 delete, deletes (not rstoreended from client)
// -0
/**
 *
 * @param {*} COLLECTION_PATH
 * @param {*} uid
 * @returns
 */
async function delete_(COLLECTION_PATH, uid, caller = '') {
	// =
	try {
		await deleteDoc(doc(DB, COLLECTION_PATH, uid)) // 2
		console.log(caller + ' ⚡✅ DELETE > Deleted doc with ID: [', COLLECTION_PATH, '] > ', uid)
		return true // SUCCESS
	} catch (e) {
		console.error(caller + ' ⚡❌ DELETE - details > COLLECTION_PATH: ', COLLECTION_PATH)
		console.error(caller + ' ⚡❌ DELETE - details > uid: ', uid)
		console.error(caller + ' ⚡❌ DELETE > ', e)
	}
}

// -0
// -0 ADD / EDIT (avec ou sans new uid)
// -0
/**
 * => pas de new
 * ON est oblige d ajouter un DTO (pas une entity...car l id de l entity est creer a l ajout )
 * on retourne l id... comme preuve de succes et de debug, ET de valeur a actualiser dans le VIEWER
 * => CA ne merge pas, si ca existe, ca ne remplace pas apparement
 * @param {*} COLLECTION_PATH
 * @param {*} dto
 * @returns
 */
async function add(COLLECTION_PATH, dto, caller = '') {
	// =
	try {
		// cas 1 => exemple: addDoc (NO significative ID <=> FIREBASE generate the ID)
		const docRef = await addDoc(collection(DB, COLLECTION_PATH), {...dto}) // 2
		console.log(
			caller + ' ⚡✅ ADD > Written doc with ID (auto-gen): [',
			COLLECTION_PATH,
			'] > ',
			docRef.id
		)
		return docRef.id
		{
			//
			// cas 2 => here I use setDoc (significative ID <=> an ID that I ve created)
			// console.log(caller + ' ⚡ FIREBASE : Writting doc with ID (NON auto-gen): ', docId);
			// const docRef = await setDoc(doc(DB, COLLECTION, docId), {
			// _0_title: dto.title,
			// _1_content: dto.content,
			// });
		}
	} catch (e) {
		console.error(caller + ' ⚡❌ ADD - details > COLLECTION_PATH: ', COLLECTION_PATH)
		console.error(caller + ' ⚡❌ ADD - details > DOC_ID: ', docId)
		console.error(caller + ' ⚡❌ ADD - details > dto: ', dto)
		console.error(caller + ' ⚡❌ ADD > ', e)
	}
}
/**
 *
 * @param {*} COLLECTION_PATH
 * @param {*} docId
 * @param {*} dto
 */
async function addWithId(COLLECTION_PATH, docId, dto, caller = '') {
	// =
	try {
		// cas 2 => here I use setDoc (significative ID <=> an ID that I ve created)
		// const docRef = await setDoc(doc(DB, COLLECTION, docId), { ...dto });
		const ref = doc(DB, COLLECTION_PATH, docId)
		await setDoc(ref, {...dto}) // 2
		console.log(
			'⚡ ✅ ADD-with-ID : Written doc with ID (NON auto-gen): [',
			COLLECTION_PATH,
			'] > ',
			docId
		)
		// return ref; // on return la ref sur l objet modifié !
		// no id to return with SET
	} catch (e) {
		console.error(caller + ' ⚡❌ ADD-with-ID - details > COLLECTION_PATH: ', COLLECTION_PATH)
		console.error(caller + ' ⚡❌ ADD-with-ID - details > DOC_ID: ', docId)
		console.error(caller + ' ⚡❌ ADD-with-ID - details > dto: ', dto)
		console.error(caller + ' ⚡❌ ADD-with-ID > ', e)
	}
}
/**
 *  pas de new
 * ON est oblige d editer une ENTITY (pas un dto, sinon je ne le retrouve pas...)
 * @param {*} COLLECTION_PATH
 * @param {*} entity
 * @returns
 */
async function edit(COLLECTION_PATH, entity, caller = '') {
	// =
	try {
		const _docRef = doc(DB, COLLECTION_PATH, entity.id)
		// attention, je donne un entity.dto => il faut dont, que l objet soit bien formtae selon AXEL STD : entity
		const _docRef2 = await setDoc(_docRef, entity.dto, {merge: true}) // 2
		console.log('_docRef: ', _docRef)
		console.log('_docRef2: ', _docRef2)
		console.log(
			caller + ' ⚡✅ EDIT > Edited doc-with-ID: [',
			COLLECTION_PATH,
			'] > ',
			entity.id
		)
		return true
	} catch (e) {
		console.error(caller + ' ⚡❌ EDIT - details > COLLECTION_PATH: ', COLLECTION_PATH)
		console.error(caller + ' ⚡❌ EDIT - details > entity: ', entity)
		console.error(caller + ' ⚡❌ EDIT ', e)
	}
}

// -0
// -0 GET et GETS
// -0
/**
 * do not return an array
 * @param {*} COLLECTION_PATH
 * @param {*} docId
 * @returns
 */
async function get(COLLECTION_PATH, docId, caller = '') {
	// =
	try {
		const _docRef = doc(DB, COLLECTION_PATH, docId)
		console.log(caller + ' ⚡ STARTING [GET]')
		const _docSnap = await getDoc(_docRef) // 2
		if (_docSnap.exists()) {
			// 1
			const id = _docSnap.id
			const dto = {..._docSnap.data()}
			const entity = new Entity(id, dto)
			console.log(caller + ' ⚡✅ GET [', COLLECTION_PATH, '/', entity.id, ']')
			return entity
		} else {
			// 1
			// doc.data() will be undefined in this case
			console.warn(
				caller + ' ⚡⚠️ GET > No such document! :: [',
				COLLECTION_PATH,
				'/',
				docId,
				']'
			)
			return null
		} // 1
	} catch (e) {
		// unexpected error OR error related to underlying module : FIREBASE
		console.error(caller + ' ⚡❌ GET - details > COLLECTION_PATH: ', COLLECTION_PATH)
		console.error(caller + ' ⚡❌ GET - details > DOC_ID: ', docId)
		console.error(caller + ' ⚡❌ GET > ', e)
	}
}
/**
 * return an array
 * 1 create eg
 * for (let i = 0; i < dbContact.length; i++) {
 * const e = dbContact[i];
 * await createCollection(DB, e); // TODO - passe en emu local pour eco
 * }
 * @param {*} COLLECTION_PATH
 * @returns
 */
async function gets(COLLECTION_PATH, caller = '') {
	// =
	try {
		const entities = []
		const collectionRef = collection(DB, COLLECTION_PATH)
		//  if you want to filter / sort
		// const queryOrderLimit = query(collectionRef, orderBy("country", "asc"), limit(100));
		// const querySnap = await getDocs(queryOrderLimit);
		//  if no filter / sort
		const querySnap = await getDocs(collectionRef) // 2
		// je veux le get avec un sort sur COUNTRY
		querySnap.forEach((_doc) => {
			// 3
			const id = _doc.id
			const dto = {..._doc.data()}
			const entity = new Entity(id, dto)
			entities.push(entity)
		}) // 3
		console.log('⚡✅ GETs [', COLLECTION_PATH, '] > ', entities.length, ' entities downloaded') // 3
		return entities
	} catch (e) {
		console.error(caller + ' ⚡❌ GETs - details > COLLECTION_PATH: ', COLLECTION_PATH)
		console.error(caller + ' ⚡❌ GETs ', e)
	}
}

// -0
// -0 FILTER
// -0
/**
 *
 * @param {*} COLLECTION_PATH
 * @param {*} filterPredicat
 * @param {*} filterValue
 * @returns
 */
async function getByFilter(COLLECTION_PATH, filterPredicat, filterValue, caller = '') {
	// =
	try {
		// const _contacts = [];
		const _collRef = collection(DB, COLLECTION_PATH)
		const _q = query(_collRef, where(filterPredicat, '==', filterValue))
		const _querySnap = await getDocs(_q)
		if (_querySnap.exists()) {
			// const _dto = { ..._docSnap.data() }; // ax generic JS
			// const _entity = new Entity(_querySnap.id, _dto);
		}
		// _querySnapshot.forEach((doc) => {
		// !!! doc.data() is never undefined for query doc snapshots
		// _contacts.push({id: doc.id, ...doc.data()});
		// console.log(doc.id, ' => ', doc.data());
		// });
		// console.log('⚡✅ getByFilter > ', _contacts.length, ' contacts with: ', filterPredicat, ' = ', filterValue);
		console.log(' ⚡✅ getByFilter > ', filterPredicat, ' == ', filterValue, ' : ', _entity)
		return _entity
		// return _contacts;
	} catch (error) {
		console.error(
			caller + ' ⚡❌ [getByFilter]  - details > COLLECTION_PATH: ',
			COLLECTION_PATH
		)
		console.error(caller + ' ⚡❌ [getByFilter]  - details > filterPredicat: ', filterPredicat)
		console.error(caller + ' ⚡❌ [getByFilter]  - details > filterValue: ', filterValue)
		console.error(caller + ' ⚡❌ [getByFilter] ', e)
	}
}
// async function dbGetsByFilter(DB, COLLECTION, filterPredicat, filterValue) {
// /**
//  *
//  * do not return an array
//  *
//  * @param {*} id
//  */
// async function getBySlug(slug) {
// try {
//   const _docRef = doc(DB, COLLECTION, id);
//   const _docSnap = await getDoc(_docRef);
//   if (_docSnap.exists()) {
//   const _dto = new CineDto(..._docSnap.data());
//   const _entity = {id: _docSnap.id, _dto};
//   console.log('⚡✅ get > Document data:', _entity);
//   return _entity;
//   } else {
//   // doc.data() will be undefined in this case
//   console.warn('⚡✅⚠️ get > No such document!');
//   return null;
//   }
// } catch (e) {
//   console.error('⚡❌ [getCine] ', e);
// }
// }
export {
	// api crud
	add,
	addWithId,
	edit,
	get,
	gets,
	delete_,
	// api filter
	getByFilter
}
