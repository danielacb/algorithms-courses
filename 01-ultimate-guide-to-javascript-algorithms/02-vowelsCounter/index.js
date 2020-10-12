/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = ['a','e','i','o','u'];

// Using For of
function vowelsCounter(text) {
    let total = 0;
    for (let letter of text) {
        if (vowels.includes(letter)) {
            total++;
        }
    }
    return total;
}

// Using Split and Map Methods
function vowelsCounter(text) {
    let total = 0;
    text.split('').map(letter => vowels.includes(letter) && total++); 
    return total;
}

// Using Split and Filter Methods
function vowelsCounter(text) {
  const filter = text.split('').filter(letter => vowels.includes(letter));
  return filter.length;
}


// Using Regular Expression
function vowelsCounter(text) {
  let match = text.match(/[aeiou]/gi);
  
  if (match) {
    return match.length;
  } else {
    return 0;
  }
}



module.exports = vowelsCounter;
