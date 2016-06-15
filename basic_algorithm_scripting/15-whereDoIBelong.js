function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // include num into the array 
  arr.push(num);
  // sort the array numerically
  function compareNumbers(a, b) {
  	return a - b;
  }

  arr = arr.sort(compareNumbers);
  
  // find where num is located in the sorted array
  return arr.indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 30)
