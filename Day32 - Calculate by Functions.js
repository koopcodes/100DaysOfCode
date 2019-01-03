// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

function recursion(number, operator) {
	if (operator) {
		return operator.call(operator, number);
	} else {
		return number;
	}
}

function zero(operator) {
	return recursion(0, operator);
}

function one(operator) {
	return recursion(1, operator);
}

function two(operator) {
	return recursion(2, operator);
}

function three(operator) {
	return recursion(3, operator);
}

function four(operator) {
	return recursion(4, operator);
}

function five(operator) {
	return recursion(5, operator);
}

function six(operator) {
	return recursion(6, operator);
}

function seven(operator) {
	return recursion(7, operator);
}

function eight(operator) {
	return recursion(8, operator);
}

function nine(operator) {
	return recursion(9, operator);
}

function plus(number) {
	return function(result) {
		return result + number;
	};
}

function minus(number) {
	return function(result) {
		return result - number;
	};
}

function times(number) {
	return function(result) {
		return result * number;
	};
}

function dividedBy(number) {
	return function(result) {
		return Math.floor(result / number);
	};
}

console.log(one(plus(one()))); // 2
console.log(two(times(three()))); // 6
console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(two(minus(three()))); // -1
console.log(two(dividedBy(three()))); // 0