/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


// Using for of and for in loops
function maxRecurringChar(text) {
    let charMap = {};
    let maxValue = 0;
    let maxChar = '';

    for (let char of text) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxValue) {
            maxValue = charMap[char];
            maxChar = char;
        }
    }
    return char;
}

// using reduce and for in loop
function maxRecurringChar(text) {
    let maxValue = 0;
    let maxChar = '';

    const charMap = text.split('').reduce((object,char) => {
        object[chat] ? object[char]++ : object[char] = 1;
        return object;
    }, {});

    for (let char in charMap) {
        if (charMap[char] > maxValue) {
            maxValue = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}


// Using For of and Arrays from Character Map
function maxRecurringChar(text) {
    let charMap = {};

    for (let char of text) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    const charArray = Object.keys(charMap);
    const valuesArray = Object.values(charMap);
    const maxCharValue = Math.max(...valuesArray);

    return charArray[valuesArray.indexOf(maxCharValue)];
}


// Using reduce and Arrays from Character Map 
function maxRecurringChar(text) {
    const charMap = text.split('').reduce((object,char) => {
        object[char] ? object[char]++ : object[char] = 1;
        return object;
    }, {});

    const charArray = Object.keys(charMap);
    const valuesArray = Object.values(charMap);
    const maxCharValue = Math.max(...valuesArray);

    return charArray[valuesArray.indexOf(maxCharValue)];
}



module.exports = maxRecurringChar;
