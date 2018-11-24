// Create a function `countAnimals` that accepts two parameters:
// 1) `animals`, a string containing animal names
// 2) `count`, and array list of animals we should count
// The result should be a number array

var countAnimals = (animals, count) => {
	var numArr = [];
	for (var r of count) {
    var find = animals.match(new RegExp(r, 'g'));
    if (find != null) {
		  numArr.push(find.length);
    } else numArr.push(0);
	}
	return (numArr);
};

countAnimals('dog,cat,dog', ['dog', 'cat', 'pig', 'fox']);

///// OR /////

function countAnimals2(animals,count){
  return count.map(animal => (animals.match(new RegExp(animal, "g")) || []).length);
}
