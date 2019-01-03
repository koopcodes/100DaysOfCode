// Tribonacci
// Like a Fibonacci, but summing the last 3 (instead of 2) numbers
// Create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified ;

function tribonacci(signature, n) {
	if (n === 0 || isNaN(n)) {
		console.log([]);
		return [];
	} else {
		for (i = 0; signature.length < n; i++) { // iterate n times
			sum = signature
				.slice(Math.max(signature.length - 3, 0))   // add last 3 array items and push to trib
				.reduce((a, b) => a + b, 0);
			signature.push(sum);
		}
	}
	return signature.slice(0, n);  //return trib - length of n
}

tribonacci([1, 1, 1], 10);
// [1,1,1,3,5,9,17,31,57,105]

///// OR /////
function tribonacci2(signature, n) {
	for (var i = 0; i < n - 3; i++) { // iterate n times
		signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
	}
	return signature.slice(0, n); //return trib - length of n
}
