// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
// The following are examples of expected output values:
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
	const rHex = decimalToHex(clamp(r));
	const gHex = decimalToHex(clamp(g));
	const bHex = decimalToHex(clamp(b));
	console.log(rHex + gHex + bHex);
	return rHex + gHex + bHex;
}

function decimalToHex(decimal) {
	return (decimal + 0x10000)
		.toString(16)
		.substr(-2)
		.toUpperCase();
}

function clamp(decimal) {
	return Math.min(255, Math.max(0, decimal));
}

rgb(255, 255, 300);
