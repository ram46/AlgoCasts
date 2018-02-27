// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Method 1 // 
function parseString(str) {
	return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join();
}

function anagrams(stringA, stringB) {
	return parseString(stringA) === parseString(stringB);
}


// Method 2 //
function charCounter(str) {
  str = parseString(str);
	return str.split('').reduce(function(obj, char) {obj[char] = obj[char]+1 || 1; return obj }, {})
}

function anagrams2(stringA, stringB) {
	return JSON.stringify(charCounter(stringA)) === JSON.stringify(charCounter(stringB))
}


module.exports = anagrams;
