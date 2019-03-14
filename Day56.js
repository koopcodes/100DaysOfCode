var matrix = [[1, 2, 3, 4],
							[5, 6, 7, 8],
							[9, 10, 11, 12],
							[13, 14, 15, 16]];
var result = [];

// https://medium.com/front-end-weekly/matrix-rotation-%EF%B8%8F-6550397f16ab
const flipMatrix = matrix => (
	matrix[0].map((column, index) => (
		matrix.map(row => row[index])		// this map extracts a single column from a matrix, converting it into a row.
	))
);

// Reversing the matrix before the flip will yield a clockwise rotation.
// Reversing the matrix after the flip will yield a counter-clockwise rotation.

const rotateClockwise = matrix => (
	flipMatrix(matrix.reverse())			// reverse the matrix before flipping it
);

const rotateCounterClockwise = matrix => (
	flipMatrix(matrix).reverse()			// flip the matrix before reversing it
);
console.log(matrix.length);
function traverseSpiral() {
	console.log(matrix.length);
	if (matrix.length != 0) {
		result = result.push(matrix[0]);
		matrix = matrix[0].pop();
		traverseSpiral()
	} else return result;
}

traverseSpiral();
