// -3
// -3 script: Load db
// -3
import json from './json/json-generic.js';
import { addWithId } from '../src/dao.js';
/**
 * Main
 */
(async function () {
	await transform();
	console.log('END SCRIPT : LOAD DB FAV (inside INTRALINK) !');
})();
// -0
// -0 API
// -0
/**
 * main
 * @returns
 */
async function transform() {
	// :
	// : tree-structure: CREATE tree structure from 'parentId' references
	// :
	const tree = (function (data, root) {
		let r;
		const o = {};
		data.forEach(function (a) {
			a.children = o[a.id] && o[a.id].children;
			o[a.id] = a;
			if (a.parentId === root) {
				r = a;
			} else {
				o[a.parentId] = o[a.parentId] || {};
				o[a.parentId].children = o[a.parentId].children || [];
				o[a.parentId].children.push(a);
			}
		});
		return r;
	})(json, null);
	const root = tree.children[3]; // 4 select the first big element
	// :
	// : tree-structure: CLEAN
	// :
	/**
	 * If 'it' does not exists, so we delete it, because FB will complain later
	 * @param {*} e
	 */
	function loopDel(e) {
		if (!e.children) delete e.children;
		else {
			e.children.forEach((e) => {
				loopDel(e);
			});
		}
	}
	loopDel(root);
	// :
	// : tree-structure: MODIFY FIELDS
	// :
	/**
	 *
	 * @param {*} e
	 */
	function loopAddDomain(e) {
		if (e.url) {
			const val = addDomain(e.url);
			e.domain = val.host;
			e.path = val.path;
			// { e.domain, e.path } = val;
		}
		if (e.children) {
			e.children.forEach((e) => {
				loopAddDomain(e);
			});
		}
		/**
		 * loop url domain
		 * @param {*} url
		 * @returns
		 */
		function addDomain(url) {
			// const host = domain.hostname.replace(/www./i, "")
			//   .replace(/https:\/\//i, "")
			//   .replace(/\/$/i, "")
			// const path = domain.pathname.replace(/www./i, "")
			//   .replace(/https:\/\//i, "")
			//   .replace(/\/$/i, "")
			const domain = new URL(url);
			const val = {
				host: domain.hostname.replace(/www./i, ''),
				path: domain.pathname ? domain.pathname : null
			};
			return val;
		}
	}
	loopAddDomain(root);
	/**
	 *
	 * @param {*} e
	 */
	function loopEmbedYt(e) {
		if (e.url) e.embedYtUrl = extractYtEmbed(e.url);
		if (e.title) {
			e.title = cleanTitle(e.title);
			e.title = cleanSlash(e.title);
			// if (e.title.includes("0-1/2-In"))
		}
		if (e.children) {
			e.children.forEach((e) => {
				loopEmbedYt(e);
			});
		}
		// 0
		/**
		 * Clean URL embed
		 * @param {*} title
		 * @returns
		 * src = "https://www.youtube.com/embed/" { extractYtEmbed(item.url) }
		 */
		function cleanTitle(title) {
			const titleCleaned = title.replace('- YouTube', '');
			return titleCleaned;
		}
		/**
		 *
		 * @param {*} title
		 * @returns
		 */
		function cleanSlash(title) {
			// -0
			// console.log('debug', title);
			if (!title) title = 'A-?';
			// + delete /, space, and -
			let titleCleaned = title.replace(/<|>|\+|\/| |(?<!L2)-/g, '_');
			titleCleaned = titleCleaned.replace(/__/g, '_');
			return titleCleaned;
		}
		/**
		 *
		 * @param {*} url
		 * @returns
		 */
		function extractYtEmbed(url) {
			// const demo =
			//   "https://www.youtube.com/watch?v=YkLKhKT8X6I&list=LLP36_9SQlYgtL2jFA7LEQVg&index=13";
			const paramsString = url.replace('https://www.youtube.com/watch?', '');
			const urlParams = new URLSearchParams(paramsString);
			const myParam = urlParams.get('v');
			return myParam;
		}
	}
	loopEmbedYt(root);
	// :
	// : DB
	// :
	console.dir(root);
	/**
	 *
	 * @param {*} node
	 * @param {*} collectionPath
	 */
	async function loopAddDb(node, collectionPath, title) {
		// =
		console.log('%c ' + collectionPath, 'font-size: 18px; background: green; color: black');
		console.group(collectionPath);
		// is folder
		if (collectionPath === '/' || title.substring(0, 3) === 'L2-') {
			// construct the sumary (arr) for this path
			const arr = [];
			for (let i = 0; i < node.children.length; i++) {
				const child = node.children[i]; // 0
				arr.push(child.title);
				// recurse
				await loopAddDb(child, collectionPath + child.title + '/', child.title); // 4
			} // 3
			await addWithId('sumary', collectionPath.replace(/\//g, '--'), { arr }); // 2
		} else {
			// 1
			try {
				const arr = [];
				// is a leaf-folder
				for (let i = 0; i < node.children.length; i++) {
					const bookmark = node.children[i]; // 0
					arr.push(bookmark.title);
					await addWithId('bookmark', collectionPath.replace(/\//g, '--') + bookmark.title, {
						bookmark
					}); // 2
				} // 3
				await addWithId('sumaryBookmark', collectionPath.replace(/\//g, '--'), { arr }); // 2
			} catch (error) {
				console.error(
					' X CATCHED : this collectionPath: ',
					collectionPath,
					' does not have childrens ? ? ? '
				);
				console.error(node);
			}
		} // 1
		console.groupEnd(collectionPath);
	}
	await loopAddDb(root, '/', ''); // 4 must put '' in path (and not '/')
}
