function aAn(word) {
	return (/^[aeiou]/i.test(word) ? 'An ' : 'A ') + word;
}
console.log(aAn('apple')); //output: An apple
console.log(aAn('Apple')); //output: An Apple
console.log(aAn('egg')); //output: An egg
console.log(aAn('car')); //output: A car

//A correct user name should be:
//1.it can use letters, digits, and underscores
//2.with a total length of 6-16 characters
//3.beginning with the letter.
function verify(username) {
	return /^[a-z][a-z0-9_]{5,15}$/i.test(username);
}
console.log(verify('myjinxin2015')); //output: true
console.log(verify('smile67')); //output: true
console.log(verify('GiacomoSorbi')); //output: true
console.log(verify('jhoffner')); //output: true
console.log(verify('g964')); //output: false     username too short
console.log(verify('matt c')); //output: false     username contains space
console.log(verify('My_name_is_ZozoFouchtra')); //output: false   username too long

var str = 'a1!b2@c3#d4$e5%';
console.log(str.replace(/[^a-z]/g, '')); //output: abcde
console.log(str.replace(/[^0-9]/g, '')); //output: 12345
console.log(str.replace(/[^!@#$%]/g, '')); //output: !@#$%

// Write a regular expression that matches all URL contained in the string
// 1) URL start with `http:// or https://`
// 2) URL end with `.com` or `.net`
// 3) The middle part of URL can use letters, numbers and dots
// 4) Ignore case, and a string may contain multiple URLs
// 5) Your regular expression name should be `regex` and your result should be a string array

var regex= /https?:\/\/[a-z0-9.]+\.(?:com|net)/gi
