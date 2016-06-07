function titleCase(str) {
	// convert the sentence to all lower case
	str = str.toLowerCase();
	
	// build an array of words from the original sentence
	words = str.split(" ");
	wordsLen = words.length;
	
	// convert the first letter of each word to upper case:
	// for each item in the words array i.e. for each words[i]
	for (var i = 0; i < wordsLen; i++) {
		// create a sub-array with all the letters
		var currentWord = words[i].split("");
		/* get first letter aka index 0 of sub-array
		   ▶ you can get the value with currentWord[0]
		   convert this letter to upper case */
		currentWord[0] = currentWord[0].toUpperCase();
		/* join letters again to re-create the word
		   then replace the word at array[i] with the title-cased one */
		words[i] = currentWord.join("");
	}	
	// join the words array again with spaces delimiters to get the sentence as expected 
	str = words.join(" ");
	
	return str;
}

titleCase("I'm a little tea pot");