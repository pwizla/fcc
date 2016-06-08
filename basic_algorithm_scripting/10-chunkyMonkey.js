function chunkArrayInGroups(arr, size) {
  // create another "big" array that will contain all new subarrays
  var newArr = [];
  var len = arr.length; // store it since it's often accessed
  // slice the original array to get the first sub-array
  // create loop to automate slicing
  /* need to take care of remaining items when len is
  	not dividable by size */
  /* check whether arr can be chunked properly 
  	or if there will remain items */
  // calculate how many remaining items there will be 
  var rem = len % size;
  // loop for automated slicing
  for (var i = 0; i <= len - size; i += size) {
	  newArr.push(arr.slice(i, i+size));
	}
	// when items remains, push them to newArr
  if (rem !== 0) {
  	/* slice takes two arguments: begin and end
  		 the 'begin' index is calculated by substracting 'rem' to 'len';
  		 for instance, if the array 'is' composed of 8 items, and
  		 is to be chunked in 3 sub-arrays of 2 items each i.e. 'size = 2',
  		 'rem' equals 2 so len - rem equals 8 - 2 = 6, meaning the 
  		 previous slices left us at index 6 of 'arr' ;
  		 the 'end' index is omitted; when omitted, the slice goes to
  		 the end of the array (i.e. 'len' in our case) */
  	newArr.push(arr.slice(len - rem));
  }
	console.log("newArr: " , newArr);
  return newArr; /* apparently, slice is non-destructive and will create a shallow copy of arr
		see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice */
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
