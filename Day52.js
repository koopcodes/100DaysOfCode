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

console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4]));
