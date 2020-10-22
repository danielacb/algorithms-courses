/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


// Using Direct comparison
function isAnagram(stringA, stringB) {
    function sanitizeString(str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }
    return sanitizeString(stringA) == sanitizeString(stringB);
}


// Using for loop to creat charMap
function isAnagram(stringA, stringB) {
    function createCharMap(str) {
        const charMap = {};

        for (let char of str) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++;
            } else {
                charMap[char] = 1;
            }
        }

        return charMap;
    }

    if (stringA.length === stringB.length) {
        const stringAMap = createCharMap(stringA);
        const stringBMap = createCharMap(stringB);

        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

// Using reduce() to create charMap
function isAnagram(stringA, stringB) {
    function createCharMap(str) {
        return str.split('').reduce((object,item) => {
            object[item] ? object[item]++ : object[item] = 1;
            return object
        }, {})
    }

    if (stringA.length === stringB.length) {
        const stringAMap = createCharMap(stringA);
        const stringBMap = createCharMap(stringB);

        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}


module.exports = isAnagram
