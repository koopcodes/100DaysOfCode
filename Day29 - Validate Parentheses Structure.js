// Valid Parentheses
// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
	var length = parens.length / 2;

	for (var i = 0; i <= length; ++i) {
		parens = parens.replace('()', '');
	}
	console.log(parens == '');
	return parens == '';
}

validParentheses('(())((()())())'); // true
validParentheses('(())((()())()'); // false

///// OR /////

function validParentheses2(string) {
	var tokenizer = /[()]/g, // ignores characters in between; parentheses are
		count = 0, // pretty useless if they're not grouping *something*
		token;
	while (((token = tokenizer.exec(string)), token !== null)) {
		if (token == '(') {
			count++;
		} else if (token == ')') {
			count--;
			if (count < 0) {
				return false;
			}
		}
	}
	return count == 0;
}
