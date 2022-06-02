// -1
// -1 => https://firebase.google.com/docs/rules/unit-tests
// -1
import { add, get } from '../src/dao.js';
import isEquivalent from '../src/utils/isEquivalent.js';

describe('TEST de l API DAO CRUD', () => {
	// 3 GLOBAL CONFIG
	// initFirestore();

	// 3 JEST PRE-TEST
	// just one time
	beforeAll(async () => {
		// let testEnv = await initializeTestEnvironment({
		// projectId: "firestore-ax-test",
		// firestore: {
		// rules: fs.readFileSync("firestore.rules", "utf8"),
		// },
		// });
		// RulesTestEnvironment.withSecurityRulesDisabled();
	});
	// each time after
	afterEach(() => {
		// RulesTestEnvironment.clearFirestore();
	});

	// 3 test
	test('if ADDed an GETted items are equals', async () => {
		const COLLECTION = 'TU-1 test_add_get';
		const _dtoAdd = {
			movie: 'axel',
			lugar: 'nzaerox'
		};
		const docRef = await add(COLLECTION, _dtoAdd);
		console.log('now we get id: ', docRef.id);
		const _dtoGet = await get(COLLECTION, docRef.id);
		console.log('debug add: ', _dtoAdd);
		console.log('debug get: ', _dtoGet);
		// hack to compare 2 objects
		// const _dtoAdd_str = JSON.stringify(_dtoAdd);
		// const _dtoGet_str = JSON.stringify(_dtoGet);
		expect(isEquivalent(_dtoAdd, _dtoGet)).toBe(true);
		// toMatch ?
	});

	// 1 test
	test.only('mocks: ADDing 1 project ', async () => {
		// -3
		// const COLLECTION = 'projects'
		const COLLECTION = 'z-db-healthcheck';
		for (let i = 0; i < arr.length; i++) {
			const movie = arr[i];
			await add(COLLECTION, movie);
			// const cines = movie.cines;
			// for (let j = 0; j < cines.length; j++) {
			// const movie_cine_schedule = cines.events[j].schedule;
			// cine[];
			// }
		}
	});

	// 3 test
	test('health checkup config FIRESTORE ', async () => {
		const COLLECTION = 'demo';
		const _dto = { admin: 'demo' };
		await add(COLLECTION, _dto);
	});

	// 3 DATA
	const arr = [
		{
			mineral: 'GOLD',
			country: 'MALI',
			name: 'Bagama',
			lat: '11.71667',
			long: '-8.73333',
			status: 'Inactivity'
		},
		{
			mineral: 'GOLD',
			country: 'GUINEA',
			name: 'Kiniero',
			lat: '10.421519',
			long: '-9.800793',
			status: 'Inactivity'
		},
		{
			mineral: 'GOLD',
			country: 'GUINEA',
			name: 'Bantiniel',
			lat: '11.116667',
			long: '-12.3',
			status: 'Project in progress'
		},
		{
			mineral: 'IRON',
			country: 'GABON',
			name: 'Belinga',
			lat: '1.144727',
			long: '13.200073',
			status: 'Drilling'
		},
		{
			mineral: 'COAL',
			country: 'Pologne',
			name: 'Janina',
			lat: '50.091845',
			long: '19.330053',
			status: '?'
		},
		{
			mineral: 'COAL',
			country: 'NIGER',
			name: 'Salkadamna',
			lat: '15.080064',
			long: '5.366865',
			status: '?'
		},
		{
			mineral: 'TANTALITE',
			country: 'NAMIBIA',
			name: 'TantaliteValley',
			lat: '-28.33251',
			long: '18.812526',
			status: '?'
		},
		{
			mineral: 'URANIUM',
			country: 'NIGER',
			name: 'Madaouela',
			lat: '18.671772',
			long: '7.483909',
			status: '?'
		},
		{
			mineral: 'PHOSPHATES',
			country: 'ARABIA',
			name: 'AlKhabramine',
			lat: '31.901703',
			long: '38.731302',
			status: '?'
		}
	];
}); // end describe()
