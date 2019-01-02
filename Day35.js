// Weight for weight
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
// All numbers in the list are positive numbers and the list can be empty.
// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// Don't modify the input

function orderWeight(strng) {
	var newArray = [];
	var weightArray = strng.split(' ').filter(function(str) {
		// Remove whitespaces and create array
		return /\S/.test(str);
	});
	for (i = 0; i < weightArray.length; i++) {
		var digits = weightArray[i]
			.toString(10)
			.split('') // For each element in the array:
			.map(Number); // Convert string array elements to numbers
		var sum = digits.reduce((total, number) => total + number); // Sum the numbers
		newArray.push([weightArray[i], sum]);
	}
	//console.log(newArray);
	newArray.sort(function(a, b) {
		if (a[0] === b[0]) {
			return 0;
		} else {
			return a[0] < b[0] ? -1 : 1;
		}
	});
	newArray.sort(function(a, b) {
		if (a[1] === b[1]) {
			return 0;
		} else {
			return a[1] < b[1] ? -1 : 1;
		}
	});
	var finalRank = '';
	for (i = 0; i < newArray.length; i++) {
		finalRank = finalRank + newArray[i][0] + ' ';
	}
	console.log(finalRank.trim());
	return finalRank.trim();
}

orderWeight(
	'86161 83 173197 180 340795 117 399344 44 424581 167 294130 86 463929 152 8921 92 499878 77 26909 124 63'
); // "124 152 44 117 180 63 83 92 167 77 86 294130 8921 86161 424581 26909 173197 340795 399344 463929 499878"
orderWeight(
	'448565 23 96980 77 344138 105 87434 94 429999 37 254187 62 357936 101 19150 56 337464 146 293635 173 2'
); // "101 2 23 105 62 37 146 173 56 94 77 19150 344138 87434 254187 337464 293635 448565 96980 357936 429999"

///// OR /////

function orderWeight2(strng) {
	const sum = (str) => str.split('').reduce((sum, el) => sum + +el, 0);
	function comp(a, b) {
		let sumA = sum(a);
		let sumB = sum(b);
		return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
	}
	console.log(
		strng
			.split(' ')
			.sort(comp)
			.join(' ')
	);
	return strng
		.split(' ')
		.sort(comp)
		.join(' ');
}

orderWeight2(
	'86161 83 173197 180 340795 117 399344 44 424581 167 294130 86 463929 152 8921 92 499878 77 26909 124 63'
); // "124 152 44 117 180 63 83 92 167 77 86 294130 8921 86161 424581 26909 173197 340795 399344 463929 499878"
orderWeight2(
	'448565 23 96980 77 344138 105 87434 94 429999 37 254187 62 357936 101 19150 56 337464 146 293635 173 2'
); // "101 2 23 105 62 37 146 173 56 94 77 19150 344138 87434 254187 337464 293635 448565 96980 357936 429999"
