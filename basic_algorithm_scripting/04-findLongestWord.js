function getLen (string) {
	return string.length;
}
function findLongestWord(str) {
	
	// split the sentence into an array of words
	
	var arr = str.split(' ');
	
	console.log("str is composed of the following words: ", arr, "\n");
	
	// get the length of each item in the array
	
	var wordLen = [];
	var arrLen = arr.length;
	for (var i = 0; i < arrLen; i++) {
		wordLen.push(getLen(arr[i]));
	}
	
	console.log("wordLen: ", wordLen, "\n");
	
	// return the max value of wordLen; see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
	
	return Math.max.apply(null, wordLen);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
