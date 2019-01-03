function pascalsTriangle(n) {
	var arr = [];

	for (var row = 0; row < n; row++) {
		arr[row] = [];
		for (var col = 0; col < row + 1; col++) {
			if (col === 0 || col === row) {
				arr[row][col] = 1;
			} else {
				arr[row][col] = arr[row - 1][col - 1] + arr[row - 1][col];
			}
		}
		var triangle = [].concat.apply([], arr);
	}
	console.log(triangle);
	return triangle;
}

pascalsTriangle(4);
