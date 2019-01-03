function printPrime(value) {
	var primes = [];
	for (var i = 2; i < value; i++) {
		primes[i] = true;
	}
	var limit = Math.sqrt(value);
	for (var i = 2; i < limit; i++) {
		if (primes[i] === true) {
			for (var j = i * i; j < value; j += i) {
				primes[j] = false;
			}
		}
	}
	for (var i = 2; i < value; i++) {
		if (primes[i] === true) {
			console.log(i);
		}
	}
}

printPrime(1000);

let findPrimeFactors = (num) => {
	let arr = [];
	for (var i = 2; i < num; i++) {
		let isPrime;
		if (num % i === 0) {
			isPrime = true;
			for (var j = 2; j <= i; j++) {
				if (i % j === 0) {
					isPrime == false;
				}
			}
		}
		if (isPrime == true) {
			arr.push(i);
		}
	}
	console.log(arr);
};

findPrimeFactors(543);
