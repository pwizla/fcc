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
		console.log(arr);
	  // return arr;
	}

	mutation(["HElLo", "hey"]);