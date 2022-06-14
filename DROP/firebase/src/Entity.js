/**
 * an entity = 1 DTO + 1 Datéabase_document_id
 */
export default class Entity {
	/**
	 * id: c est l ID du document dans Firestore
	 */
	constructor(id, dto) {
		this.id = id
		this.dto = dto
	}
}
