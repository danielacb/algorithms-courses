/* CHALLENGE
Given a sentence, return the longest word in the string.
E.g longestWord('Top Shelf Web Development Training on Scotch') //should return 'Development'
*/


// Using for loop
function longestWord(text) {
    text = text.split(' ');
    let longest = '';

    for (let word of text) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}


// Using reduce()
function longestWord(text) {
    return text.split(' ').reduce((currentWord, maxWord) => {
        if (currentWord.length > maxWord.length) {
            return currentWord;
        } else {
            return maxWord;
        }
    });
}


// Using sort()
function longestWord(text) {
    text = text.split(' ').sort((a,b) => b.length - a.length);
    return text[0];
}

module.exports = longestWord
