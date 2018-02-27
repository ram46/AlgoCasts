// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce(function(acc, char) { return char + acc }, '');
}

// Method 2 //
function reverse2(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
	return result;
}

// Method 3 //
function reverse(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  
  return result;
}


module.exports = reverse;
