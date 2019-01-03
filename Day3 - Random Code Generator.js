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
		createCode();
		dupeCheck();

		function createCode() {
			let concat = [];
			concat[0] = openArray[~~(13 * Math.random())];
			concat[1] = openArray[~~(13 * Math.random())];
			concat[2] = ~~(10 * Math.random());
			concat[3] = ~~(10 * Math.random());
			concat[4] = ~~(10 * Math.random());
			concat[5] = ~~(10 * Math.random());
			concat[6] = closeArray[~~(9 * Math.random())];
			concat[7] = closeArray[~~(9 * Math.random())];
			codes.push(concat.join(''));
		}

		function dupeCheck() {
			if (i != 0) {
				if (codes[i] == codes[i - 1]) {
					createCode(i);
				} else return codes[i];
			}
		}
  }
  console.log(codes.join('\n'));
	return codes.join('\n');
}

rndCode('ABCDEFGHIJKLM', '~!@#$%^&*', 100);
