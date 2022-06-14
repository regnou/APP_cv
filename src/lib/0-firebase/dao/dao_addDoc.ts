// !!
// !! [ADD]
// !!
import {doc, addDoc, getDoc, setDoc, serverTimestamp} from 'firebase/firestore'
/**
 *  .add(...) et .doc().set(...) sont complètement équivalents.
 *  setDoc: if the document, does not exists, it will be created.
 **/
export const dao_addDoc = async (col: any, dto: any, id: string = '', caller: string = '') => {
	try {
		delete dto.id // -------- we don't save id, the unique id, is the one of the database
		let docRef
		id === ''
			? console.table([[`${caller}/⚡ > [ADD]`, `🏁 🏁 🏁`]])
			: console.table([[`${caller}/⚡ > [ADD]`, `parameter: ${id}`, `🏁 🏁 🏁`]])
		if (id === '') {
			// !!!!!! ------- cas 1 ==> [ADD] (#with-id-autogen)
			// !!!!!!! --------- cas 1.1 ==> ADD (#with-id-autogen)
			console.table([[`${caller}/⚡ >> [ADD](#with-id-autogen)`, '⌛ Creating an entity...']])
			docRef = await addDoc(col, {...dto, createdAt: serverTimestamp()})
			console.table([
				[
					`${caller}/⚡ << [ADD](#with-id-autogen)`,
					`Created entity with 'id'`,
					`✅ ${col.id} / ${docRef.id}`
				]
			])
		} else {
			// !!!!!!
			// !!!!!! cas 2 => [ADD] (#with-id) // info: here I use setDoc to update-soft
			console.table([
				[
					`${caller}/⚡ > [ADD](#with-id) or [UPDATE-soft] ?`,
					`⌛ Verifying if the 'id' already exists in Firestore...`,
					`${col.id} / ${id}`
				]
			])
			docRef = doc(col, id) // ---- doc() = if the id, does not exists, it will create it
			const qSnap = await getDoc(docRef)
			if (!qSnap.exists()) {
				// !!!!!!! --------- cas 2.1 ==> ADD (#with-id)
				console.table([
					[
						`${caller}/⚡ >> [ADD](#with-id) or [UPDATE-soft] ?`,
						`⌛ Creating an entity with 'id'...`,
						`${col.id} / ${id}`
					]
				])
				await setDoc(docRef, {...dto, createdAt: serverTimestamp()})
				console.table([
					[
						`${caller}/⚡ << [ADD](#with-id)`,
						`Created entity with 'id'`,
						`✅ ${col.id} / ${docRef.id}`
					]
				])
			} else {
				// !!!!!!! --------- cas 2.2 ==> UPDATE (cas special, car theoriquement non prevus, pour update, j ai update)
				console.table([
					[
						`${caller}/⚡ ⚠️  >> [UPDATE] `,
						`⌛ Updating an entity (#with-id)...`,
						`${col.id} / ${id}`
					]
				])
				// TODO -  await setDoc(docRef, {...dto, updatedAt: serverTimestamp()})
				await setDoc(docRef, {...dto, updatedAt: serverTimestamp()}, {merge: true})
				console.table([
					[
						`${caller}/⚡ ⚠️  << [UPDATE] `,
						`Updated entity (#with-id)`,
						`✅ ${col.id} / ${docRef.id}`
					]
				])
			}
		}
		console.table([[`${caller}/⚡ < [ADD] `]])
		return docRef.id // ---
	} catch (e) {
		// !!!!!!!! ---------
		// !!!!!!!! ---------
		console.error(
			caller + '/⚡ ❌ [ADD]',
			id === '' ? '(#with-id-autogen)' : '(#with-id)',
			' - details > collection path: ',
			col
		)
		// id === '' ? docRef.id : `${docRef.id} === ${id}`
		console.error(
			caller + '/⚡ ❌ [ADD]',
			id === '' ? '(#with-id-autogen)' : '(#with-id)',
			' - details > id: ',
			id
		)
		console.error(
			caller + '/⚡ ❌ [ADD]',
			id === '' ? '(#with-id-autogen)' : '(#with-id)',
			' - details > DTO: ',
			dto
		)
		console.error(
			caller + '/⚡ ❌ [ADD]',
			id === '' ? '(#with-id-autogen)' : '(#with-id)',
			' - CATCHED => Error with: dao_addDoc() ',
			e
		)
	}
}
