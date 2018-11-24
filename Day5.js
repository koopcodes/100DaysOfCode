// Create a function `shuffleIt`that accepts two or more parameters: `arr`, an array of numbers, followed by an arbitrary number of numeric arrays
// Each numeric array contains two numbers, which are indices for elements in arr with the numbers always within bounds
// For every such array, swap the elements.
// Try to use arrow functions, the spread operator, destructuring, and rest parameters

var shuffleIt = (arr, ...indicies) => {
	for (i = 0; i < indicies.length; i++) {
		var [a, b] = indicies[i];
		var c = arr[b];
		arr[(a, b)] = arr[(b, a)];
		arr[a] = c;
	}
	return arr;
};

shuffleIt([1, 9, 2, 8, 3, 7, 4, 6, 5], [0, 8], [1, 7], [2, 6], [3, 5]);

///// OR /////

var shuffleIt2=(arr,...ex)=>{
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
  return arr;
}