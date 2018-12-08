// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
	if (walk.length != 10) {
		console.log('false');
		return false;
	}
	for (i = 1; i <= walk.length; i++) {
		if (walk[i] === walk[i - 1]) {
			console.log('false');
			return false;
		}
	}
	console.log('true');
	return true;
}

isValidWalk(['n', 'w', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); //true

///// OR /////

// Returns to starting point
function isValidWalk2(walk) {
	var res = { n: 0, w: 0, s: 0, e: 0 };
	walk.forEach((c) => res[c]++);
	console.log(walk.length === 10 && res.n == res.s && res.e == res.w);
	return walk.length === 10 && res.n == res.s && res.e == res.w;
}

isValidWalk2(['n', 'w', 'n', 'w', 'n', 's', 'e', 's', 'e', 's']); //true

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
	var mults = [0];
	for (i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			mults.push(i);
		}
	}
	console.log(mults.reduce((total, value) => total + value));
	return mults.reduce((total, value) => total + value);
}

solution(10); // 23

function solution2(number) {
	var sum = 0;
	for (i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	console.log(sum);
	return sum;
}

solution2(16);  //60