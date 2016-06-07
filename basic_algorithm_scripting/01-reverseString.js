function reverseString(str) {
	var finalStr = [];
	for (var i = 0, n = str.length; i < n; i++) {
		finalStr.push(String(str[i]));
	}
	finalStr = finalStr.reverse();
	finalStr = finalStr.join('');
	return finalStr;
}

reverseString("hello");