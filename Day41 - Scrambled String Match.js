// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//  Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
	if (str1.length < str2.length) {
		// Stop if string 1 is smaller than string 2. No point going any further
		console.log(false);
		return false;
	}
	for (i = 0; i < str2.length; i++) {
		if (str1.indexOf(str2[i]) == -1) {
			console.log(false);
			return false;
		}
	}
	console.log(true);
	return true;
}

scramble('jscripts', 'javascript'); // false
scramble('rkqodlw', 'world'); // true
scramble('cedewaraaossoqqyt', 'codewars'); //true
scramble('katas', 'steak'); // false
scramble('scriptjava', 'javascript'); // true
scramble('scriptingjava', 'javascript'); // true

///// OR /////

function scramble2(str1, str2) {
	var letterCount = {}; // Create Object to hold each letter as key and the count of each letter as value
	for (i = 0; i < str1.length; i++) {
		// This loop counts how many of each letter there are in str1 and stores in letterCount
		!letterCount[str1[i]] ? (letterCount[str1[i]] = 1) : letterCount[str1[i]]++;
	}
	for (j = 0; j < str2.length; j++) {
		// This loops checks each letter in str2
		if (!letterCount[str2[j]]) {
			// If it does not exist in str1
			return false; // Then terminate
		} else {
			// Otherwise it does exist so:
			letterCount[str2[j]]--; // Decrement the count value for that letter key in letterCount object
		} // If the count reaches 0 and is checked again (for example 4 letter 's' in str2 and only 3 's' in str1) it will fail
  }
  return true; // If the count for all letters in str1 never reaches 0 we have a winner!
}

scramble2('jscripts', 'javascript'); // false
scramble2('rkqodlw', 'world'); // true
scramble2('cedewaraaossoqqyt', 'codewars'); //true
scramble2('katas', 'steak'); // false
scramble2('scriptjava', 'javascript'); // true
scramble2('scriptingjava', 'javascript'); // true
