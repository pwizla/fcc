function confirmEnding(str, target) {
	
	console.log("str: ", str);
	
	/* get the length of target to check how far
	   we should go back from end of str when comparing */
	// create a substring from the nth (=target.length) to last char of str
	var endOfStr = str.substring(str.length - target.length);
	console.log("endOfStr: ", endOfStr);
	// check whether this substring is equal to target
	return target == endOfStr;
}

confirmEnding("Bastian", "an");