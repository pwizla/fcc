function truncateString(str, num) {
	var trunc = "...";
	var index;	
	if (num <= 3) {
		index = num - 1;
	}	else {
		index = num - 4;
	}
	str = str.substring(0, index);
	str = str.concat(trunc);

	console.log(str)
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);