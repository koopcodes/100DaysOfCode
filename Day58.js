// https://medium.com/front-end-weekly/matrix-rotation-%EF%B8%8F-6550397f16ab
// Traverse Sprial matrix by rotation
var matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];
var result = [];

const flipMatrix = () => (

	matrix[0].map((column, index) => (
		matrix.map(row => row[index])
		// this map extracts a single column from a matrix, converting it into a row.
	)),
	console.log('flip: ', matrix)
);

const rotateClockwise = () => (
	flipMatrix(matrix.reverse())
	// reverse the matrix before flipping it
);

const rotateCounterClockwise = () => (
	console.log(Object.prototype.toString.call(matrix)),
	flipMatrix(matrix).reverse(),
	console.log('rotate: ', matrix)
	// flip the matrix before reversing it
);

const readLine = () => (
	result.push(matrix[0]),
	console.log('read: ', result)
);

const delLine = () => (
	matrix.splice(0, 1),
	console.log('delete: ', matrix)
);

function traverseSpiral() {
	
	if (matrix.length > 0) {
		console.log(Object.prototype.toString.call(matrix));
		console.log('matrix.length: ', matrix.length);
		readLine();
		delLine();
		console.log(rotateCounterClockwise());
		rotateCounterClockwise();
		traverseSpiral();
	} else {
		return result;
	}
	return result;
}

console.log(traverseSpiral());
