function persistence(num) {
	var length = num.toString().length;
	var digits = num
		.toString(10)
		.split('')
		.map(Number);

	function multiply(digits) {
		var iterations = 0;
		var sum = 1;
		for (i = 0; i < length; i++) {
      iterations ++;
			sum = sum * digits[i];
		}

		if (length === 1) {
			return iterations;
		} else {
			multiply(sum);
		}
	}
}

persistence(553);
