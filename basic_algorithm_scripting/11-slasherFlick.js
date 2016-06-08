/* Return the remaining elements of an array after chopping off n elements from the head.
	The head means the beginning of the array, or the zeroth index. */

function slasher(arr, howMany) {
	/* 'chopping off n elements from the head' could be reworded as 
		 'keeping the last "array.length - n"th elements';
		  we'll use array.splice() to directly get these nth to last elements; 
		  array.splice requires a start argument; here it's set to index = howMany;
		  the deleteCount 2nd argument can be omitted if our goal is to delete
		  all elements through the end, which is what we want here */
	return arr.slice(howMany);
}

slasher(["burgers", "fries", "shake"], 1);