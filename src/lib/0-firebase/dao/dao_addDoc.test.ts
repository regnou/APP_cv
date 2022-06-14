// !!!!!
// !!! TEST
// !!!!!!!!
import type {Contact} from 'src/types'
import {contactsCol} from '../clientFirebase'
import {dao_addDoc} from './dao_addDoc'

// --- les objets retournes (dto) ont tous l'id de leur db (firestore-doc-id)
// --------- console.log(`🐬 -' : ${JSON.stringify(docRef2, null, 4)}`);// ----
// ------   GET    - return ENTITY or null
// ------   GETs   - return ENTITY[] or null
// -------  QUERY  - return ENTITY[] or null
// ----     CREATE - return ID (newly or not-newly created) (NB: si il existe, on fait merge)
// ----     UPDATE - return ID (updated) or NULL (ne pas creer d entite ici)
// -------- DELETE - return ID de l item deleted or NULLimport {readFileSync, createWriteStream} from 'fs'

describe('ADD', () => {
	it('[ADD] (#with-id-autogen) ', async () => {
		const col = 'contact'
		const dto: Contact = {
			'1city': 'melon 2',
			'2age': '19',
			'3name': 'simone'
		}
		const id = await dao_addDoc(contactsCol, dto, '', '🙊')
		console.log('FINISH TEST WITH: ', id)
	})
	it('[UPDATE] aka [ADD](#with-id)(#id-already-exists) ', async () => {
		const col = 'contact'
		const dto: Contact = {
			'1city': 'melon 2',
			'2age': '19',
			'3name': 'valerie 1'
		}
		const id = await dao_addDoc(contactsCol, dto, '', '🙊')
		console.log('FINISH TEST WITH: ', id)
		//
		dto['3name'] = 'valerie 2'
		const id2 = await dao_addDoc(contactsCol, dto, id, '🙊')
		console.log('FINISH TEST WITH: ', id2)
	})
	it('[ADD](#with-id)', async () => {
		const col = 'contact'
		const dto: Contact = {
			'1city': 'melon 2',
			'2age': '19',
			'3name': 'simone vitest 4 only'
		}
		const id = await dao_addDoc(contactsCol, dto, 'jojo', '🙊')
		console.log('FINISH TEST WITH: ', id)
		// expect(2).toBe(2)
	})
})
