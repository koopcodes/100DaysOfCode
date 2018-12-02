// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
	if (num.toString(10).length === 1) {
		return 0;
	} else {
		this.iterations = 0;
		multiply(num, iterations);
	}

	function multiply(num, iterations) {
		this.iterations++;
		var digits = num
			.toString(10)
			.split('')
			.map(Number);
		var sum = 1;
		for (i = 0; i < digits.length; i++) {
			sum = sum * digits[i];
		}
		if (sum.toString().length === 1) {
			return this.iterations;
		} else {
			multiply(sum, this.iterations);
		}
	}
	return this.iterations;
}

persistence(999);

///// OR /////
function persistence2(num) {
	var times = 0;

	num = num.toString();

	while (num.length > 1) {
		times++;
		num = num
			.split('')
			.map(Number)
			.reduce((a, b) => a * b)
			.toString();
	}

	return times;
}

persistence2(999);
