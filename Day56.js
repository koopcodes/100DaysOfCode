var matrix = [[1, 2, 3, 4],
							[5, 6, 7, 8],
							[9, 10, 11, 12],
							[13, 14, 15, 16]];

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
	flipMatrix(matrix).reverse()			// flip the matrix before revesing it
);

console.log(rotateCounterClockwise(matrix));
