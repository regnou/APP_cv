export function getUrlLevelStructures(url) {
	let urlSplittedByLevel = [];
	console.log('F url : ', url);
	if (url === '/') urlSplittedByLevel = ['/'];
	else {
		const arr = url.split('/');
		const length = arr.length;
		if (arr.length === 2) urlSplittedByLevel = ['/', arr[1]];
		else if (length === 3) urlSplittedByLevel = ['/', arr[1], arr[2]];
		else if (length === 4)
			urlSplittedByLevel = ['/', arr[1], arr[2], arr[3]]; // --/store/admin/ax/
		else if (length === 5) urlSplittedByLevel = ['/', arr[1], arr[2], arr[3], arr[4]];
		// --/store/admin/ax/paymentMethod
		else if (length === 6) urlSplittedByLevel = ['/', arr[1], arr[2], arr[3], arr[4], arr[5]];
		// --/admin/ax/ecom/subscription/1234
		else if (length === 7)
			urlSplittedByLevel = ['/', arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]]; //
		// TODO - other levels // -3
	}
	console.log('F urlSplittedByLevel : ', urlSplittedByLevel);
	return urlSplittedByLevel;
}
