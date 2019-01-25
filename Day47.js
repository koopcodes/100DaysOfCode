// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
	var i, n = s.length, charMap = {};
	var lowercase = s.toLowerCase();
	for (i = 0; i < n; i++) {
		charMap[lowercase[i]] = (charMap[lowercase[i]] || 0) + 1;
	}
	for (i = 0; i < n; i++) {
		if (charMap[lowercase[i]] === 1) {
			return s[i];
		}
	}
	return ''; // every char repeats
}

console.log(firstNonRepeatingLetter('stTress')); //r

///////////////
// Can you get the loop?
// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.
// Your objective is to determine the length of the loop.

function loop_size(node) {
	var loopArr = [];
	while (node && loopArr.indexOf(node) < 0) {
		loopArr.push(node);
		node = node.next;
	}
	var firstIndex = Math.max(0, loopArr.indexOf(node));
	return loopArr.length - firstIndex;
}
