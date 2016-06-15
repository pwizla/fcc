function rot13(str) { // LBH QVQ VG!
  
  console.log("BEGIN function rot13…");

	const ARR1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
	const ARR2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	// split the input string 'str' to create an array
	str = str.split('');
	console.log('As an array, the inputed string looks like: ', str);

	/* for each letter in this array, get indexOf(letter) in ARR1 or ARR2
     then replace the letter with the one with same index in the other array  */

	for (var i = 0; i < str.length; i++) {
		if (ARR1.indexOf(str[i]) !== -1) { // found letter in ARR1
			str[i] = ARR2[ARR1.indexOf(str[i])];
		} else if (ARR2.indexOf(str[i]) !== -1) { // found letter in ARR2
			str[i] = ARR1[ARR2.indexOf(str[i])];
		}
	/* if found neither in ARR1 nor in ARR2, do nothing
     i.e. don't touch characters that are not in the arrays (spaces or punctuation) */
	}

	str = str.join('');
	console.log('Decoded string is : ', str);
  console.log("END function rot13.");
	return str;
}