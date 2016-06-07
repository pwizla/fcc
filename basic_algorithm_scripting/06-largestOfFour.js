function largestOfFour(arr) {
	var len = arr.length;
	var maxValues = [];
	// for each sub-array of 'arr'
	for (var i = 0; i < len; i++) {
	// find the max of the current sub-array
		currentMax = Math.max.apply(null, arr[i]);
	// and push it to an array containing the max values
		maxValues.push(currentMax);
	}
	return maxValues;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);