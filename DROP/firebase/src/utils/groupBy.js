// const cars = [
// { brand: 'Audi', color: 'black' },
// { brand: 'Peugot', color: 'white' }
// ];
// const groupByParentId = groupBy('parentId');
// const groupByColor = groupBy('color');

// console.log(
// JSON.stringify({
//   carsByBrand: groupByBrand(cars),

const groupBy = (key) => (array) =>
	array.reduce((objectsByKeyValue, obj) => {
		const value = obj[key]
		objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
		return objectsByKeyValue
	}, {})

const groupByparentId = (key) => (array) =>
	array.reduce((objectsByKeyValue, obj) => {
		const value = obj['parentId'][key]
		objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj['dto'])
		return objectsByKeyValue
	}, {})

export {groupBy, groupByparentId}
