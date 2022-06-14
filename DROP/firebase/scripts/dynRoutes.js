// -3
// -3 script: Print (you have to copy it) dynamic routes
// -3 in order to save them
// -3
import {gets} from '../src/dao.js'

;(async function () {
	await main()
	console.log('END SCRIPT')
})()

/**
 * main
 */
async function main() {
	// -0
	// const entity = await gets(DB, "site"); // zic
	const entity = await gets('job')
	const LINKS = entity[0].dto.children
	LINKS.forEach((e) => {
		const route = '/' + e.id
		console.log(JSON.stringify(route))
	})
}
