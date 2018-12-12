// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times

function findOdd(A) {
	this.key = 0;
	const distribution = A.reduce(
		(acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
		{}
	);

	var comp = Object.keys(distribution).forEach(function(key) {
		var value = distribution[key];
		if (value % 2 === 1) {
			this.key = key;
		}
  });
  console.log(this.key);
	return this.key;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5

///// OR /////

function findOdd2(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

findOdd2([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5