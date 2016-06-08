/* Return true if the string in the first element of the array 
	contains all of the letters of the string in the second element of the array.
	For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
	The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
	Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".		*/

	function mutation(arr) {
		// don't forget to ignore case, e.g. by converting all to lower case
		for (var i = 0; i < arr.length; i++)	{
			arr[i] = arr[i].toLowerCase();
		}
		/* create an array with all the letters 
		   from the second item of the input */
		var first = arr[0].split('');
		var second = arr[1].split('');
		// console.log("first: ", first);
		// console.log("second: ", second);
		var fLen = first.length;
		var sLen = second.length;

		/* check whether each letter from this newly created array
			 is included in the first item of the input */
		var firstIndex = 0;
		var secondIndex = 0;
		var found = false;
			// while the letter corresponding to second[secondIndex] is not found in first, go through 'first'
			// safety net: don't forget to set boundary to exit while loop:
			// firstIndex can't be greater than fLen !!
		while (secondIndex < sLen) {
			console.log('BEGIN MAIN WHILE LOOP');
			console.log('firstIndex', firstIndex);
			console.log('secondIndex', secondIndex);
			console.log('found:', found);
			console.log('first[firstIndex]:', first[firstIndex]);
			console.log('second[secondIndex]:', second[secondIndex]);
			if (second[secondIndex] != first[firstIndex]) {
				console.log('GOING TO BEGIN SECOND WHILE LOOP');
			} else {
				console.log('SKIPPING SECOND WHILE LOOP');
			}
			while (second[secondIndex] != first[firstIndex] && firstIndex < fLen) {
				found = false;
				console.log('BEING SECOND WHILE LOOP');
				console.log('firstIndex', firstIndex);
				console.log('secondIndex', secondIndex);
				console.log('found:', found);
				firstIndex++;
				console.log('END SECOND WHILE LOOP');
				console.log('firstIndex', firstIndex);
				console.log('secondIndex', secondIndex);
				console.log('found:', found);
				// if condition not met, i.e. we found similar letters, 
				// exit this while loop, re-init first index, increment second index
			}
			console.log('END MAIN WHILE LOOP, before assigning');
			console.log('firstIndex', firstIndex);
			console.log('secondIndex', secondIndex);
			console.log('found:', found);
			firstIndex = 0;
			secondIndex++;
			found = true;
			console.log('END MAIN WHILE LOOP, after assigning');
			console.log('firstIndex', firstIndex);
			console.log('secondIndex', secondIndex);
			console.log('found:', found);
		}
		// exiting main while loop, we've reached the end of 'second'
			// if not found, return false and exit everything
		console.log(found);
		return found;
	  // return arr;
	}

	mutation(["HElLo", "hey"]);