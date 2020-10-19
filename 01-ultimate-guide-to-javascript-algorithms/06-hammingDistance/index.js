/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



// Using for loops
function hammingDistance(strA, strB) {
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();
    let result = 0;

    if (strA.length === strB.length) {
        for (i = 0; i < strA.length; i++) {
            if (strA[i] !== strB[i]) {
                result++;
            }
        }
        return result;
    } else {throw new Error('Strings do not have equal length!')}
}

// Using while
function hammingDistance(strA,strB) {
    strA = strA.toLowerCase();
    strB = strB.toLowerCase();
    let i = 0;
    let result = 0;

    if (strA.length === strB.length) {
        while (i < strA.length) {
            if (strA[i] !== strB[i]) {
                result++;
            }
            i++
        }
        return result;
    } else {throw new Error('Strings do not have equal length!')}
}


module.exports = hammingDistance
