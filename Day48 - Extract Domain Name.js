// Extract the domain name from a URL
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
	var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
	if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) return match[2];
}

console.log(domainName("http://google.com"));  // google.com
console.log(domainName("http://google.co.jp")); // google.co.jp

////////////////////////////////////////

function domainName2(url) {
	var urlPattern = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d\.-]+)\.(?:[a-z\.]{2,10})(?:[\/\w\.-]*)*/;
	// ^(?:https?:\/\/)? ---> is there an http or https part? don't capture them.
	// (?:w{3}.)? ---> are there 3 w? don't capture them
	// ([a-z\d.-]+). ---> the domain name part. Capture it.
	// (?:[a-z.]{2,10})(?:[/\w.-]) ---> the directories and folders part. don't capture them.

	var domainPattern = url.match(urlPattern);
	var extractDomain = domainPattern[1];
	return extractDomain;
}

console.log(domainName2("http://google.com"));  // google
console.log(domainName2("http://google.co.jp")); // google.co

function domainName3(url) {
	var urlPattern = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d\-]+)\.(?:[a-z\.]{2,10})(?:[\/\w\.-]*)*/;
	// removed the . after \d\ and before minus. Was ([a-z\d\.-]+)

	var domainPattern = url.match(urlPattern);
	var extractDomain = domainPattern[1];
	return extractDomain;
}

console.log(domainName3("http://google.com"));  // google
console.log(domainName3("http://google.co.jp")); // google

/////////////////////////////////
const regex = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d\-]+)\.(?:[a-z\.]{2,10})(?:[\/\w\.-]*)*/;
const str = `https://www.google.co.uk`;
let m;

if ((m = regex.exec(str)) !== null) {
	// The result can be accessed through the `m`-variable.
	m.forEach((match, groupIndex) => {
		console.log(`Found match, group ${groupIndex}: ${match}`);
	});
}
