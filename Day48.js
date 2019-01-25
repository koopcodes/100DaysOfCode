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
	var urlPattern = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d\.-]+)\.(?:[a-z\.]{2,10})(?:[/\w\.-]*)*/;
	var domainPattern = url.match(urlPattern);
	var extractDomain = domainPattern[1];
	return extractDomain;
}

console.log(domainName2("http://google.com"));  // google
console.log(domainName2("http://google.co.jp")); // google.co
