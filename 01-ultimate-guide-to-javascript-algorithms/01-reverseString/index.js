/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// Using Bult-ins methods
function reverseString(text) {
  // Transform string into array, reverse it and then turn it back into a string
  return text.split('').reverse().join('');
}

// Using Built-ing methods and ES6
function reverseString(text) {
  // Use spread operator to turn string into array, reverse it and then turn it back into a string
  return [...text].reverse.join('');
}

// Using For Loop
function reverseString(text) {
  let result = '';
  for (i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}

// Using for of loop
function reverseString(text) {
  let result = '';
  for(let char of text) {
    result = char + result;
  }
  return result;
}

// Using Recursion
function reverseString(text) {
  if (text === '') {
    return ''
  } else {
    return reverseString(text.substr(1)) + text[0];
  }
}

// Using reduce()
function reverseString(text) {
  return text.split('').reduce((a,b) => b + a, '');
}

// Using reduce() and ES6 spread operator
function reverseString(text) {
  return [...text].reduce((a,b) => b + a, '');
}

module.exports = reverseString;
