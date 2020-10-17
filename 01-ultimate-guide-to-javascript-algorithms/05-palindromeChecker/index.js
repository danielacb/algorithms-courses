/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



// Chaining Built-in Methods
function palindromeChecker(text) {
    const reversedText = text.toLowerCase().split('').reverse().join('');
    return reversedText === text;
}

// Using spread operator and reduce()
function palindromeChecker(text) {
    text = text.toLowerCase();
    return [...text].reduce((a,b) => b + a) === text;
}

// Using every()
function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('');
    return charArray.every((letter, index) => letter === charArray[charArray.length - index - 1]);
}

// Using for loop
function palindromeChecker(text) {
    for(let i = 0; i < text.length / 2; i++) {
        if(text[i] !== text[text.length - i - 1]) return false;
    }
    return true;
}

module.exports = palindromeChecker;
