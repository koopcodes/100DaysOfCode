var sum_pairs = function(ints, s) {
	var map = {},
		pair, pairMaxIndex = ints.length - 1;

	for (var i = 0; i <= pairMaxIndex; i++) {
		var a = ints[i];
		var b = s - a;
		var j = map[b];
		if (j !== undefined && i <= pairMaxIndex && j <= pairMaxIndex) {
			pairMaxIndex = i > j ? i : j;
			pair = i < j ? [a, b] : [b, a];
		}
		var tmp = map[a];
		if (tmp === undefined || i < tmp) {
			map[a] = i;
		}
	}
	console.log(pair);
	return pair;
};

sum_pairs([1, 4, 8, 7, 3, 15], 8); // [1, 7]
sum_pairs([1, -2, 3, 0, -6, 1], -6);  // [0, -6]
sum_pairs([20, -13, 40], -7); //undefined

///// or /////
var sum_pairs = function(ints, s) {
	set = new Set();

	for (let i of ints) {
		if (set.has(s - i)) {
			return [s - i, i];
		}

		set.add(i);
	}
}
