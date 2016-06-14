function destroyer(arr) {
  // Remove all the values
  // arguments[0] will be the initial array whose values have to be filtered out
  // arguments[1+] will be values to be filtered out
  // create a real array from the list of arguments of the destroyer function
  var args = Array.from(arguments);
  // remove the first argument since it's the array to be filtered out
  var arrayToFilter = args.shift();

  console.log("args are:", args);
  console.log("arrayToFilter is:", arrayToFilter);
  
  function isNotPresent(value) {
		return args.indexOf(value) == -1;
	}

  arr = arrayToFilter.filter(isNotPresent);
  console.log('arr is now:', arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
