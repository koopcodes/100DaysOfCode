// Directions Reduction
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.

// Examples
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []

function dirReduc(arr) {
	arr.forEach(function(currentValue, index, arr) {
		switch (currentValue) {
			case 'NORTH':
				if (arr[index + 1] == 'SOUTH') {
          arr.splice(index, 2);
          dirReduc(arr);
				}
				break;
			case 'SOUTH':
				if (arr[index + 1] == 'NORTH') {
          arr.splice(index, 2);
          dirReduc(arr);
				}
				break;
			case 'EAST':
				if (arr[index + 1] == 'WEST') {
          arr.splice(index, 2);
          dirReduc(arr);
				}
				break;
			case 'WEST':
				if (arr[index + 1] == 'EAST') {
          arr.splice(index, 2);
          dirReduc(arr);
				}
				break;
			default:
				break;
		}
	});
  return arr;
}

dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']); // ['WEST']
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]); // []