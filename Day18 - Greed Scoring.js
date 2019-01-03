// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450

function score( dice ) {
  var counts = [0,0,0,0,0,0];
  var tripletScores = [1000,200,300,400,500,600];
  var singleScores = [100,0,0,0,50,0];
  dice.forEach(function(rolledNumber){ counts[rolledNumber-1]++; }); // count of each number rolled
  return counts.reduce(function(sum,rolledNumber,i){ 
    return sum + (rolledNumber >= 3? tripletScores[i] : 0) + singleScores[i]*(rolledNumber % 3);
  },0);
}

score([1, 1, 1, 1, 1]);


///// OR /////


function score2(dice) {
  var sum = 0;
  dice = dice.sort();
  for(var i = 0; i < dice.length; i++){
    if (dice[i] == dice[i + 1] && dice[i + 1] == dice[i + 2]) {
      switch(dice[i]) {
        case 1:
          sum += 1000; break;
        case 6:
          sum += 600; break;
        case 5:
          sum += 500; break;
        case 4:
          sum += 400; break;
        case 3:
          sum += 300; break;
        case 2:
          sum += 200;
      }
      i = i + 2;
      continue;
      }
    else if (dice[i] == 1) {
      sum += 100;
    } else if (dice[i] == 5) {
      sum += 50;
    }
  }
  return sum;
}

score2([1, 1, 1, 1, 1]);