/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// Using Sets and Array.from()
function mergeArrays(...arrays) {
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    return Array.from(new Set([...jointArray]));
}

// Using Sets and spread operator
function mergeArrays(...arrays) {
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    return [...new Set([...jointArray])]
}

// Using filter()
function mergeArrays(...arrays) {
    let jointArray = [];
    arrays.forEach(array => {
        jointArray = [...jointArray,...array];
    });

    return jointArray.filter((item,index) => jointArray.indexOf(item) === index);
}

// Using reduce()
function mergeArrays(...arrays) {
    let jointArray = [];

    arrays.forEach(array => {
        jointArray = [...jointArray,...array];
    });

    return jointArray.reduce((newArray,item) => {
        if (newArray.includes(item)) {
            return newArray;
        } else {
            return [...newArray,item];
        }
    }, [])
}


module.exports = mergeArrays
