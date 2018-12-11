// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times

function findOdd(A) {
	const distribution = A.reduce(
		(acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
		{}
	);
	for (var acum in distribution) {
		if (distribution.hasOwnProperty(acum) % 2 === 1) {
			console.log(acum);
		}
	}
	//   console.log(JSON.stringify(distribution,null,2));
	//   return JSON.stringify(distribution,null,2);
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
