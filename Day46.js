// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


// Does not pass
function firstRepeatingLetter(s) {
	var counts = {};
	for (var i = 0; i < s.length; i++) {
		var num = s[i];
		if (counts[num] === undefined) {
			counts[num] = 1;
		} else if (counts[num] == 1) {
			++counts[num];
			return num;
		}
	}
	return null;
}

console.log(firstRepeatingLetter('stress')); //s

//does not pass
function firstNonRepeatingLetter(s) {
	var i, n = s.length, charMap = {};
	for (i = 0; i < n; i++) {
		charMap[s[i]] = (charMap[s[i]] || 0) + 1;
	}
	for (i = 0; i < n; i++) {
		if (charMap[s[i]] === 1) {
			return s[i];
		}
	}
	return ''; // every char repeats
}

console.log(firstNonRepeatingLetter('stress')); //t
