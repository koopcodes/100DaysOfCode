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

const rotateClockwise = matrix => (
	flipMatrix(matrix.reverse())			// reverse the matrix before flipping it
);

const rotateCounterClockwise = matrix => (
	flipMatrix(matrix).reverse()			// flip the matrix before reversing it
);

const readLine = result => (
	result.push(matrix[0])
);

const delLine = matrix => (
	matrix[0].pop()
);

console.log(matrix.length);
function traverseSpiral() {
	console.log(Object.prototype.toString.call(matrix));
	console.log(matrix[0].length);
	matrix[0].length ? result.push(matrix[0]) : matrix = matrix[0].pop();
	rotateCounterClockwise();
	console.log(matrix[0].length);	
	return result;
}

console.log(traverseSpiral());
