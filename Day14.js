// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
	var iterations = 0;
	var length = num.toString().length;
	var digits = num
		.toString(10)
		.split('')
    .map(Number);
    
	multiply(digits, iterations);
  
  function multiply(digits, iterations) {
		iterations = iterations + 1;
		var sum = 1;
		for (i = 0; i < length; i++) {
			sum = sum * digits[i];
			console.log('Sum: ', sum);
		}
		if (length === 1) {
      console.log(iterations);
			return iterations;
		} else {
			multiply(sum, iterations);
		}
	}
}

persistence(553);
