function toBeDestroyed() {
	return 
}

function destroyer(arr) {
  // Remove all the values
  // arguments[0] will be the initial array whose values have to be filtered out
  // arguments[1+] will be values to be filtered out
  // create a real array from the list of arguments of the destroyer function
  var args = Array.from(arguments);
  // remove the first argument since it's the array to be filtered out
  // args.shift();
  var arrayToFilter = args.shift();

  console.log("args is:", args);
  console.log("arrayToFilter is:", arrayToFilter);
  arr = arrayToFilter.filter(toBeDestroyed);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
