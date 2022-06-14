// -3
// -3 script: Load db
// -3
import json from './json/json-generic.js'
import {addWithId} from '../src/dao.js'

;(async function () {
	await transform()
	console.log('END SCRIPT : LOAD DB FAV (inside INTRALINK) !')
})()

/**
 * main
 * @returns
 */
async function transform() {
	// -0
	// -2
	const tree = (function (data, root) {
		let r
		const o = {}
		data.forEach(function (a) {
			a.children = o[a.id] && o[a.id].children
			o[a.id] = a
			if (a.parentId === root) {
				r = a
			} else {
				o[a.parentId] = o[a.parentId] || {}
				o[a.parentId].children = o[a.parentId].children || []
				o[a.parentId].children.push(a)
			}
		})
		return r
	})(json, null) // -1
	// -2
	const root = tree.children[3] // 3 select the first big element
	// If it does not exists, so we delete it, because FB will complain later
	const loopDel = (e) => {
		if (!e.children) delete e.children
		else {
			e.children.forEach((e) => {
				loopDel(e)
			})
		}
	}
	loopDel(root) // -1
	// -2
	/**
	 * loop url domain
	 * @param {*} url
	 * @returns
	 */
	function addDomain(url) {
		const domain = new URL(url)
		// const host = domain.hostname.replace(/www./i, "")
		//   .replace(/https:\/\//i, "")
		//   .replace(/\/$/i, "")
		// const path = domain.pathname.replace(/www./i, "")
		//   .replace(/https:\/\//i, "")
		//   .replace(/\/$/i, "")
		const val = {
			host: domain.hostname.replace(/www./i, ''),
			path: domain.pathname ? domain.pathname : null
		}
		return val
	}
	const loopAddDomain = (e) => {
		if (e.url) {
			const val = addDomain(e.url)
			e.domain = val.host
			e.path = val.path
			// { e.domain, e.path } = val;
		}
		if (e.children) {
			e.children.forEach((e) => {
				loopAddDomain(e)
			})
		}
	}
	loopAddDomain(root) // -1
	// -2
	/**
	 * Clean URL embed
	 * @param {*} title
	 * @returns
	 * src = "https://www.youtube.com/embed/" { extractYtEmbed(item.url) }
	 */
	function cleanTitle(title) {
		const titleCleaned = title.replace('- YouTube', '')
		return titleCleaned
	}
	/**
	 *
	 * @param {*} title
	 * @returns
	 */
	function cleanSlash(title) {
		// console.log('debug', title);
		if (!title) title = 'A-?'
		const titleCleaned = title.replace(/\//g, '')
		return titleCleaned
	}
	/**
	 *
	 * @param {*} url
	 * @returns
	 */
	function extractYtEmbed(url) {
		// const demo =
		//   "https://www.youtube.com/watch?v=YkLKhKT8X6I&list=LLP36_9SQlYgtL2jFA7LEQVg&index=13";
		const paramsString = url.replace('https://www.youtube.com/watch?', '')
		const urlParams = new URLSearchParams(paramsString)
		const myParam = urlParams.get('v')
		return myParam
	}
	const loopEmbedYt = (e) => {
		if (e.url) e.embedYtUrl = extractYtEmbed(e.url)
		if (e.title) {
			e.title = cleanTitle(e.title)
			e.title = cleanSlash(e.title)
			// if (e.title.includes("0-1/2-In"))
		}
		if (e.children) {
			e.children.forEach((e) => {
				loopEmbedYt(e)
			})
		}
	}
	loopEmbedYt(root) // -1
	// -2
	console.dir(root)
	// add DB;
	/**
	 *
	 * @param {*} node
	 * @param {*} collectionPath
	 */
	async function loopAddDb(node, collectionPath) {
		// : LIST CASE
		if (collectionPath === '' || node.title.substring(0, 3) === 'L2-') {
			for (let i = 0; i < node.children.length; i++) {
				// initialCase
				let path = ''
				if (collectionPath === '') {
					path = '/'
				} else {
					path = collectionPath + node.title + '/'
				}
				// in list case, we write in index of the childrens
				const arr = []
				node.children.forEach((e) => {
					arr.push(e.title)
				})
				const isEven = path.split('/').length % 2 === 0
				if (isEven) {
					await addWithId(path + '0index', '0index', {arr: arr}) // 2
				} else {
					await addWithId(path, '0index', {arr: arr}) // 2
				}
				await loopAddDb(node.children[i], path)
			}
		} else {
			// : LEAF CASE
			const isEven = collectionPath.split('/').length % 2 === 0
			if (isEven) {
				await addWithId(collectionPath + 'urls', node.title, node) // 1
			} else {
				await addWithId(collectionPath, node.title, node) // 1
			}
		}
	}
	await loopAddDb(root, '') // -1 - must put '' in path (and not '/')

	return root
}
// :
// :
// :
// :
// path = collectionPath + node.title + '/';
//   await addWithId(db, "0index", "0index", { arr }); // even number
//   await loopAddDb(node.children[i], "/");
// await addWithId(db, path, '0index', { arr });
//  path += collectionPath +  + '/';
// :
// }
// --------
// const e = root.children[i]; // site name
// const siteName = e.title;
// indexesL1.push(siteName);
// // L2 // 0 DOC
// for (let j = 0; j < e.children.length; j++) {
//   const f = e.children[j]; // page name
//   const pageName = f.title;
//   indexesL2.push(pageName);
//   for (let k = 0; k < f.children.length; k++) {
//   const g = f.children[k]; // bookmark item (url, name ...)
//   await add(db, siteName + "/" + pageName + "/urls", g);
//   }
// }
// await addWithId(db, siteName, '0index', { arr: indexesL2 });
// :
// const indexesL1 = [];
// let indexesL2 = [];
// . site  page link
// L1 // COLLECTION
// for (let i = 0; i < root.children.length; i++) {
//   indexesL2 = [];
//   const e = root.children[i]; // site name
//   const siteName = e.title;
//   indexesL1.push(siteName);
//   // L2 // 0 DOC
//   for (let j = 0; j < e.children.length; j++) {
//   const f = e.children[j]; // page name
//   const pageName = f.title;
//   indexesL2.push(pageName);
//   for (let k = 0; k < f.children.length; k++) {
//     const g = f.children[k]; // bookmark item (url, name ...)
//     await add(db, siteName + "/" + pageName + "/urls", g);
//   }
//   }
//   await addWithId(db, siteName, '0index', { arr: indexesL2 });
// }
//  a la fin, on ajoute l idx principal
// await addWithId(db, "0index", 'index', { arr: indexesL1 }); // 0
// const site = doc(db, "rooms", "roomA", "messages");
// :
// function loop(node, isRoot) {
//   if (node) {
//   space += "+";
//   for (let i = 0; i < node.length; i++) {
//     const e = node[i];
//     if (isRoot) {
//       // open new page
//       console.log("PAGE: ", e.title);
//       loop(e.children, false); // to del
//     }
//     else {
//       // console.log("DISPLAY SECTION");
//       console.log(space, " ", e.title, " ", e.url);
//       if (e.children) {
//       // e.children.forEach(ee => {
//       // });
//       loop(e.children, false);
//       }
//     }
//   }
//   }
// }
// loop(root.children, true);
