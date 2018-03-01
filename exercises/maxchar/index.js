// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// method 1
// function maxChar(str) {
// 	var max = 0;
// 	var mostFreqChar = '';
// 	var charObj = str.split('').reduce(function(acc, char) { acc[char] = acc[char]+1 || 1 ; return acc }, {})
// 	for (var char in charObj) {
// 		if (charObj[char] > max) {
// 			max = charObj[char]
// 			mostFreqChar = char;
// 		}
// 	}
// 	return mostFreqChar;
// }


// method 2
function maxChar(str) {
	var charObj = str.split('').reduce(function(acc, char) { acc[char] = acc[char]+1 || 1 ; return acc }, {})
	return Object.keys(charObj).filter(function(char) { 
		return charObj[char] === Math.max(...Object.values(charObj)) 
	}).join('')
}

module.exports = maxChar;


