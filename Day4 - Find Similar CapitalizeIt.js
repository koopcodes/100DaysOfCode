// Create a function `findSimilarity`that accepts two parameters: `str`, a sentence containing some words separated by spaces, and `word`, a sample word
// Keep the words that are similar to the sample word and remove the other words
// Similarity is defined as: the same length as the sample; the letter at the beginning and the end of word are same as the sample too
// No similar words in the sentence should return an empty string

function findSimilarity(str, word) {
	strArray = str.split(/ /);
	final = '';
	for (i = 0; i < strArray.length; i++) {
		if (
			strArray[i].match(/^./) == word[0] &&
			strArray[i].match(/.$/) == word[word.length - 1] &&
			strArray[i].length == word.length
		) {
			final += strArray[i] + ' ';
		}
	}
	return final.trim();
}

// or

findSimilarity=(str,w)=>str.split(' ').filter(a=>a.length==w.length&&a[0]==w[0]&&a.slice(-1)==w.slice(-1)).join(' ')

console.log(findSimilarity('I live life and love javascript', 'love'));

// Capitalize first letter of every word
function capIt(str) {
	return str
		.split(/ /)
		.map((s) => s.replace(/^./, (x) => x.toUpperCase()))
		.join(' ');
}

//Or

function capIt2(str) {
	return str.replace(/\b./g, (x) => x.toUpperCase());
}

/////// RegEx ////////
var word = 'abcd';
//method 1:
//
var regstr =
	word[0] + //first letter
	word.slice(1, -1).replace(/./g, '.') + //middle letters
	word.slice(-1); //last letter
var reg1 = new RegExp('^' + regstr + '$');
// console.log(reg1); //output: /^a..d$/

//method 2:
var regstr = word
	.replace(/./g, '.')
	.replace(/^./, word[0])
	.replace(/.$/, word.slice(-1));
var reg2 = new RegExp('^' + regstr + '$');
// console.log(reg2); //output: /^a..d$/

//method 3:
var regstr = word[0] + Array(word.length - 1).join('.') + word.slice(-1);
//use Array(x).join(".") to generate a repeat text of "."
var reg3 = new RegExp('^' + regstr + '$');
// console.log(reg3); //output: /^a..d$/
