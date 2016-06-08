/* Return the remaining elements of an array after chopping off n elements from the head.
	The head means the beginning of the array, or the zeroth index. */

function slasherFlick(arr, howMany) {
	/* 'chopping off n elements from the head' could be reworded as 
		 'keeping the last "array.length - n"th elements';
		  we'll use array.splice() to directly get these nth to last elements; */
	console.log(arr.splice(howMany, arr.length - 2));
}

slasherFlick([1, 2, 3, 4, 5], 2);