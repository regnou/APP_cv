const groupBy = (key) => (array) =>
	array.reduce((objectsByKeyValue, obj) => {
		const value = obj[key];
		objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
		return objectsByKeyValue;
	}, {});

const groupByDto = (key) => (array) =>
	array.reduce((objectsByKeyValue, obj) => {
		const value = obj['dto'][key];
		objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj['dto']);
		return objectsByKeyValue;
	}, {});

export { groupBy, groupByDto };
