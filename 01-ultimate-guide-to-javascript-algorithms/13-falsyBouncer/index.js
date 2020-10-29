/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// Using forEach()
function falsyBouncer(array) {
    const result = [];

    array.forEach(item => {
        if (item) {
            result.push(item);
        }
    });

    return result;
}

// Using for...of
function falsyBouncer(array) {
    const result = [];

    for (value of array) {
        if (value) {
            result.push(value);
        }
    }

    return result;
}

// Using filter()
function falsyBouncer(array) {
    return array.filter(value => Boolean(value));
}


module.exports = falsyBouncer
