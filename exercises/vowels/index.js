// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Method 1 
function vowels(str) {
	var re = /[aeiou]/gi;
	var match = str.match(re);
	return match ? match.length : 0;
}


// Method 2
function vowels2(str) {
	var vowelsList = ['a','e','i','o','u'];
	var counter = 0;
	str.toLowerCase().split('').forEach(function(letter) {if (vowelsList.indexOf(letter) !== -1) counter++});
	return counter
}

module.exports = vowels;