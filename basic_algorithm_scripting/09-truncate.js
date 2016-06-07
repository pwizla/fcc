function truncateString(str, num) {
	var trunc = "...";
	var index;	
	if (num < str.length) {
		if (num <= 3) {
			index = num;
		}	else {
			index = num - 3;
		}
		str = str.substring(0, index);
		str = str.concat(trunc);
	}
	console.log(str)
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);