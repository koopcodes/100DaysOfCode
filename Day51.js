// For Loop - Naive
function reverseWithLoop(stringToReverse) {
	let reversed = '';
	for (i = stringToReverse.length - 1; i >= 0; i--) {
		reversed += stringToReverse[i];
	}
	return reversed;
}
reverseWithLoop('Koop Codes'); // 'sedoC pooK'

// ES6 For Loop
function reverseWithES6(stringToReverse) {
	let reversed = '';
	for (let char of stringToReverse) {
		reversed = char + reversed;
	}
	return reversed;
}
reverseWithES6('Koop Codes');

// String to Array then back
function reverseMe(stringToReverse) {
	return stringToReverse.split('').reverse().join('');
}
reverseMe('Koop Codes'); // 'sedoC pooK'

// ES6 Spread Syntax with Array
function reverseWithSpread(stringToReverse) {
	return [...stringToReverse].reverse().join('');
}
reverseWithSpread('Koop Codes');

// Reduce
function reverseByReduce(stringToReverse) {
	return stringToReverse.split('').reduce((reverse, char) => char + reverse, '');
}
reverseByReduce('Koop Codes');

// Reverse by Recursion
function recursionReverse(stringToReverse) {
	if (stringToReverse === '') {
		return stringToReverse;
	} else {
		return recursionReverse(stringToReverse.substr(1)) + stringToReverse[0];
	}
}
recursionReverse('Koop Codes');
