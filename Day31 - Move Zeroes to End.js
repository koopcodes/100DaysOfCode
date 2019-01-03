// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function(arr) {
	for (i = arr.length-1; i >= 0; i--) {
		if (arr[i] === 0) {
			arr.splice(i, 1);
			arr.push(0);
		}
	}
	console.log(arr);
	return arr;
};

moveZeros([0, 1, 0, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0]);
moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]);

///// OR /////
var moveZeros2 = function (arr) {
  console.log(arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;})));
}

moveZeros2([0, 1, 0, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0]);
moveZeros2([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]);
