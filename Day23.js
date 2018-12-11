// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times

function findOdd(A) {
  this.key;
	const searchArray = A.reduce(
		(acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
		{}
	);

	Object.keys(searchArray).forEach(function(key) {
		var value = searchArray[key];
		if (value % 2 === 1) {
      this.key = key;
			}
  });
  console.log(this.key);
  return this.key;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
