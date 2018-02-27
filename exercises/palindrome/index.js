// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	var reversedStr = str.split('').reduce(function(acc, char) {return char + acc }, '');
  	return str === reversedStr;
}


// Method 2 //
// not a good solution because duplicated checking but still good to know diff ways
function palindrome2(str) {
  return str.split('').every(function(char, index) {
    return char === str[str.length - index - 1]
  })
}

module.exports = palindrome;
