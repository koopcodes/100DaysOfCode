// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

min([23, 54, 6, 87, 123, 33, 1], 'index');

function min(numArray, toReturn) {
	var lowNum, lowIndex;
	for (i = 0; i < numArray.length; i++) {
		if (lowNum > numArray[i] || lowNum == undefined) {
			lowNum = numArray[i];
			lowIndex = i;
		}
	}
	if (toReturn == 'index') {
		console.log(lowIndex);
		return lowIndex;
	} else {
		console.log(lowNum);
		return lowNum;
	}
}

///// OR /////
function min2(numArray, toReturn) {
	var val = Math.min.apply(null, numArray);
	return toReturn == 'value' ? val : arr.indexOf(val);
}

//////////////////////////////////////////////////////

function sumDigPow(start, end) {
	coll = [];
	for (var i = start; i < end; i++) {
		var digits = i.toString(10).split('').map(Number);
		for (var j = 0; j < digits.length; i++) {
			total = +Math.pow(digits[j], j + 1);
    }
    if (total === i ){
    coll.push(total);
    }
    console.log(coll);
    return coll;
	}
}

sumDigPow(1, 10);
