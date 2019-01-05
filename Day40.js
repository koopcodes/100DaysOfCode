// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
// N! = 1 * 2 * 3 * ... * N
// Be careful 1000! has 2568 digits...
// For more info, see: http://mathworld.wolfram.com/Factorial.html
// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros

function zeros(n) {
	var count = 0;
	for (i = 1; i <= Math.log(n) / Math.log(5); i++) {
		count = count + Math.floor(n / Math.pow(5, i));
	}
	console.log(count);
	return count;
}

zeros(390029053); // 97507256
zeros(983803831); // 245950952
zeros(42945510); // 10736371

/////ALSO/////
function zeros2 (n) {
  var res = 0;
  for(var i=5; i<n; i*=5){
    res += Math.floor(n/i);
  }
  console.log(res);
  return res;
}

zeros2(390029053); // 97507256
zeros2(983803831); // 245950952
zeros2(42945510); // 10736371