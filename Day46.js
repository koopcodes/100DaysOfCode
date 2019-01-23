

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
