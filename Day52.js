// Given 2 different lists of integers, write a function that will return their intersection

function intersection(list1, list2) {
	length1 = list1.length;
	length2 = list2.length;
	intersects = [];
	for (var loop1 = 0; loop1 < length1; loop1++) {
		for (var loop2 = 0; loop2 < length2; loop2++) {
			if (list1[loop1] === list2[loop2]) {
				intersects.push(list1[loop1]);
				break;
			}
		}
	}
	return intersects;
}

// console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4]));

function intersection2(list1, list2) {
	return list1.filter((value) => list2.indexOf(value) !== -1);
}
// console.log(intersection2([1, 2, 2, 3], [2, 2, 3, 4]));

function intersection3(list1, list2) {
	var countsObj = {};
	var results = [];
	for (let i = 0; i < list1.length; i++) {
		!countsObj[list1[i]] ? countsObj[list1[i]] = 1 : countsObj[list1[i]]++;
	}
	for (let j = 0; j < list2.length; j++) {
		if (!countsObj[list2[j]]) {
			break;
		} else {
			results.push(list2[j]);
			countsObj[list1[j]]--;
		}
	}
	return results;
}
console.log(intersection3([1, 2, 2, 3], [2, 2, 3, 4]));
