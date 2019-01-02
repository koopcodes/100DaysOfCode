// Maximum Contiguous Subarray
var maxSequence = function(arr) {
	var maxSoFar = 0;
	var maxEndingHere = 0;
	for (i = 0; i < arr.length; i++) {
		maxEndingHere = maxEndingHere + arr[i];
		if (maxEndingHere < 0) {
			maxEndingHere = 0;
		}
		if (maxSoFar < maxEndingHere) {
			maxSoFar = maxEndingHere;
		}
	}
	console.log(maxSoFar);
	return maxSoFar;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  console.log(message.split('').map(translate).join(''));
  return message.split('').map(translate).join('');
}

rot13('Happy New Year!!'); // Unccl Arj Lrne!!