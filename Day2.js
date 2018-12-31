// Create a function `rndCode`that generates a random verification code
// Length should be 8
// The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM"
// The 3rd-6th characters should be four numbers
// the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*"
// If Your code runs 100 times, It should generate 100 non duplicate verification codes

function rndCode(openRange, closeRange, num) {
	const openArray = openRange.split('');
	const closeArray = closeRange.split('');
	let codes = [];
	for (i = 0; i < num; i++) {
		let concat = [];
		codes[num] = openArray[~~(10 * Math.random())];
		console.log(codes[num]);
	}
}

rndCode('ABCDEFGHIJKLM', '~!@#$%^&*', 100);
