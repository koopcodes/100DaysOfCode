// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  var hours = Math.floor(seconds / 3600);
  var remainder = seconds % 3600;
  var minutes = Math.floor(remainder / 60);
  var seconds = remainder % 60;
  console.log(('0'+ hours).slice(-2) + ':' + ('0'+ minutes).slice(-2) + ':' + ('0'+ seconds).slice(-2));
  return (('0'+ hours).slice(-2) + ':' + ('0'+ minutes).slice(-2) + ':' + ('0'+ seconds).slice(-2));
}

humanReadable(86399); // '23:59:59'

///// OR /////
function humanReadable2(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}