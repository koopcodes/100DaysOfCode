// Create a function called roundIt that accepts 1 parameter num, a number with a decimal point
// If the decimal point is on the left side of the number use the ceil() method
// If the decimal point is on the right side of the number use the floor() method
// If the decimal point is in the middle of the number use the round method

function roundIt(num) {
	digits = num.toString().split('.');
	leftDigits = digits[0].length;
	rightDigits = digits[1].length;
	if (leftDigits < rightDigits) {
		return Math.ceil(num);
	} else if (leftDigits > rightDigits) {
		return Math.floor(num);
	} else {
		return Math.round(num);
	}
}

// or

function roundIt(num) {
	let [leftDigits, rightDigits] = num
		.toString()
		.split('.')
		.map((section) => section.length);
	diff = leftDigits - rightDigits;
	magic = diff < 0 ? Math.ceil : diff > 0 ? Math.floor : Math.round;
	return magic(num);
}
// ------------------------------------------------------------------

// Create a function called alienLanguage that accepts 1 parameter str, a sentence
// Each word in the sentence is separated by spaces, last letter of each is lowercase, all the other letters are capitalized

function alienLanguage(str) {
	return str
		.toUpperCase() // Uppercase the whole string
		.split(' ') // Split into an array of words
		.map(function(word) {
			// Iterate the array
			return word.slice(0, -1) + word.slice(-1).toLowerCase(); // For each word, create a new word that is the first part of the word added to an lowercased version of the last character in the word
		})
		.join(' '); // Join back together into a single string
}
