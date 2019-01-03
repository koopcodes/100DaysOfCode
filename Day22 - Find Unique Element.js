// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers

function findUniq(arr) {
  console.log(arr.filter(function(value){
    return arr.indexOf(value) === arr.lastIndexOf(value);
  })[0] || -1);
  
  return arr.filter(function(value){
    return arr.indexOf(value) === arr.lastIndexOf(value);
  })[0] || -1;
}

findUniq([ 10, 1, 1, 1, 1, 1, 1, 1 ]); // 10