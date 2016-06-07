function palindrome (str) {
  
    // tests input str
    console.log("original string is: ", str);
  
	// remove all non alphanumeric characters from the str argument
	var strToCompare = str.replace(/[^A-Za-z0-9]/g, '');
  	console.log("after non alphanumeric cleanup, strToCompare is: ", strToCompare);console.log();

	strToCompare = strToCompare.toLowerCase();
	
	console.log("after lower case conversion, strToCompare is: ", strToCompare);console.log();
	
	// create an array of substrings 
	splittedStrToCompare = strToCompare.split('');
	
	console.log("splitted string: ", splittedStrToCompare);

	// create a reverted copy of the array and join again to compare with original string
	revStr = splittedStrToCompare.reverse();
	revStr = revStr.join('');
	
	console.log("reversed string: ", revStr);
	
	return revStr == strToCompare;
	
}

palindrome("not a palindrome");