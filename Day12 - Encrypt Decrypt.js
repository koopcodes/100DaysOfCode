// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
// Examples:
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text

function encrypt(text, n) {
	if (n < 1) {
		console.log(text);
		return text;
	}
	if (text === null){
		console.log(null)
		return null;
	}
	function replace() {
		var evens = '';
		var odds = '';
		for (j = 0; j < text.length; j++) {
			if (j % 2 === 1) {
				evens += text[j];
			} else odds += text[j];
		}
		text = evens + odds;
		return text;
	}
	for (i = 0; i < n; i++) {
		replace(text);
	}
	console.log(text);
	return text;
}

function decrypt(encryptedText, n) {
	if (n < 1 ) {
		console.log(encryptedText);
		return encryptedText;
	}
	if (encryptedText === null){
		console.log(null)
		return null;
	}
	function unreplace() {
		var evens = '';
		var odds = '';
		var text = '';
		if (encryptedText.length % 2 == 0) {
			var midPoint = Math.round(encryptedText.length / 2);
			var evens = encryptedText.substr(0, midPoint);
			var odds = encryptedText.substr(midPoint, encryptedText.length);
		} else {
			var midPoint = Math.round(encryptedText.length / 2 - 1);
			var evens = encryptedText.substr(0, midPoint);
			var odds = encryptedText.substr(midPoint, encryptedText.length);
		}
		for (j = 0; j < midPoint; j++) {
			text += odds[j];
			text += evens[j];
		}
		if (encryptedText.length % 2 === 1) {
			text += odds[midPoint];
		}
		encryptedText = text;
		return encryptedText;
	}
	for (i = 0; i < n; i++) {
		unreplace(encryptedText);
	}
	console.log(encryptedText);
	return encryptedText;
}

encrypt('This is a test!', 2);
decrypt('s eT ashi tist!', 2);
