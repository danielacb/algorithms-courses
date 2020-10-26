/* 
 Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
 E.g  chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5) // should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

// Using for of loop
function chunkArray(array, size) {
    const result = [];

    for (value of array) {
        let lastArray = result[result.length - 1];

        if (!lastArray || lastArray.length == size) {
            result.push([value]);
        } else {
            lastArray.push(value);
        }
    }

    return result;
}

// Using while and splice()
function chunkArray(array, size) {
    const result = [];
    const arrayCopy = [...array];

    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0,size));
    }

    return result;
}

// Using for loop and slice()
function chunkArray(array, size) {
    const result = [];

    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        result.push(chunk);
    }

    return result;
}


// Using Recursion
function chunkArray(array, size) {
    if (array.length <= size) {
        return [array];
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)];
}



module.exports = chunkArray
