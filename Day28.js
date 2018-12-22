// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt (str){
  console.log(str.replace(/\b(\w)(\w+)\b/g, '$2$1ay'));
  return str.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
};

////////
function pigIt2(str){
  if(typeof(str)!=='string'){
    console.log('please you must enter a valid string. The value you entered is not a string');
    return false;
  }
  //convert the sentence to lowercase letters and split the sentence into an array of words
  var words = str.toLowerCase().split(" ");
  
  //create an array to hold the new pigLatin sentence
  var pigLatinSentence = [];
  
  //loop through each word in the new array and split it to an array of characters
  for(var i=0;i<words.length;i++){
    letters = words[i].split("");
    console.log(letters);
    //extract the first element of the array, concantenate with "ay" and push it to the array of letters
    if (letters != '!') {
    letters.push(letters.splice(0,1)+"ay");
    } else letters.push(letters.splice(0, 1));
    //join the letters to form a new word
    word = letters.join('');
    
    //if it is the first word of the sentence, convert the first letter to UpperCase
    if(i===0){
      word = word.slice(0,1).toUpperCase() + word.slice(1);
    }
    
    //push the newly formed words to the pigLatinSentence array
    pigLatinSentence.push(word);
  }
  
  //join the words to form a new sentence
  pigLatinSentence = pigLatinSentence.join(" ");
  console.log(pigLatinSentence);
  return pigLatinSentence;
}
pigIt2('O tempora o mores !');