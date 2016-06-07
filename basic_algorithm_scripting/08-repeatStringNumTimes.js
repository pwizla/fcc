function repeatStringNumTimes(str, num) {
	if (num <= 0) {
		return "";
	} else {
		var origStr = str;
		for (var i = 1; i < num; i++) {
			str = str.concat(origStr);
		}
		console.log('str: ', str);
		return str;
	}
}

repeatStringNumTimes("abc", -2);