function chunkArrayInGroups(arr, size) {
  // create another "big" array that will contain all new subarrays
  var newArr = [];
  // slice the original array to get the first sub-array
  newArr.push(arr.slice[0, 0+size]);
  console.log("newArr: " + newArr);
  // create loop to automate slicing
  // push further sub-array into the new one
  /* what about dealing with remainders? i.e. when original array 
  		is comprised of 5 arrays and size is 2, for instance? */
  return arr; /* apparently, slice is non-destructive and will create a shallow copy of arr
  								see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice */
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
