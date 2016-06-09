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

		// convert both items of 'arr' into strings
		var firstW = String(arr[0]);
		var secondW = String(arr[1]);
		// console.log("firstW: ", firstW);
		// console.log("secondW: ", secondW);

		/* create an array with all the letters from the second item of the input */
		var secondLetters = arr[1].split('');

		var j = 0;

		while (j < secondLetters.length) {
			if (firstW.indexOf(secondLetters[j]) === -1) { // returns -1 if not found
				return false;
			} else {
				j++;
			}
		}

		return true;
	  // return arr;
	}

	mutation(["HElLo", "hey"]);