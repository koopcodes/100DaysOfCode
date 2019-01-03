// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
	var anagrams = [];
	var sortedWord = alphabetize(word);
	for (i = 0; i < words.length; i++) {
		var sortedListWord = alphabetize(words[i]);
		if (sortedWord === sortedListWord) {
			anagrams.push(words[i]);
		}
	}
	console.log(anagrams);
	return anagrams;
}

function alphabetize(string) {
	return string
		.split('')
		.sort()
		.join();
}

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); // ['carer', 'racer']

////////////////

function pigIt (str){
  console.log(str.replace(/\b(\w)(\w+)\b/g, '$2$1ay'));
  return str.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
};

pigIt('O tempora o mores !');