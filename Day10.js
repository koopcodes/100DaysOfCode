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
		return text;
	}
	var evens = [];
	var odds = [];
	var strArray = text.split('');
	for (i = 0; i < n; i++) {
		for (j = 0; j < strArray.length; j++) {
			if (j % 2 === 1) {
				evens.push(strArray[j]);
			} else odds.push(strArray[j]);
    }
    strArray = [evens + odds];
  }
  console.log(strArray.join(""));
  return strArray.join("");
}

function decrypt(encryptedText, n) {}

encrypt('This is a test!', 2);
