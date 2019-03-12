// Traverse matrix in a spiral starting left to right then top to bottom

var matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];
var xLengthStart = 0;
var xLengthEnd = matrix[0].length - 1;
var yLengthStart = 0;
var yLengthEnd = matrix.length - 1;
var result = [];

function traverseMatrix() {

	for (let i = xLengthStart; i <= xLengthEnd; i++) {
		// console.log(matrix[yLengthStart][i]);
		result = result + (matrix[yLengthStart][i]) + ', ';
	}
	yLengthStart++;
	for (let j = yLengthStart; j <= yLengthEnd; j++) {
		// console.log(matrix[j][xLengthEnd]);
		result = result + (matrix[j][xLengthEnd]) + ', ';
	}
	xLengthEnd--;
	for (let k = xLengthEnd; k >= xLengthStart; k--) {
		// console.log(matrix[yLengthEnd][k]);
		result = result + (matrix[yLengthEnd][k]) + ', ';
	}
	yLengthEnd--;
	for (let m = yLengthEnd; m >= yLengthStart; m--) {
		// console.log(matrix[m][xLengthStart]);
		result = result + (matrix[m][xLengthStart]) + ', ';
	}
	xLengthStart++;

	if (yLengthEnd < 0 && xLengthEnd < 0) {
		return result.replace(/,\s*$/, "");
	} else {
		return traverseMatrix();
	};
}

console.log(traverseMatrix());
