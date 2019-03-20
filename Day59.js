'use strict';

class TraverseMatrix {
	constructor() {
		this.matrix = [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16]
		];
		this.result = [];
	}

	flipMatrix() {
		this.matrix[0].map((column, index) => (
			matrix.map(row => row[index])
		))
	}

	rotateMatrixCounterClockwise() {
		flipMatrix(this.matrix).reverse();
		return this.matrix;
	}

	writeLine() {
		this.result.push(this.matrix[0]);
		return this.result;
	}

	deleteLine() {
		this.matrix.splice(0, 1);
		return this.matrix;
	}
}
let m = new TraverseMatrix();
m.writeLine();
m.deleteLine();
console.log(m.rotateMatrixCounterClockwise());
