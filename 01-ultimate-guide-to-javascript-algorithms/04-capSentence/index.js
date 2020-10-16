/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// Using forEach() and slice()
function capSentence(text) {
  const capsArray = [];
  text = text.toLowerCase().split(' ');
  
  text.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1));
  });
  
  return capsArray.join(' ');
}

// Using forEach() and replace()
function capSentence(text) {
  const capsArray = [];
  text = text.toLowerCase().split(' ');
  
  text.forEach(word => {
    capsArray.push(word.replace(word[0], word[0].toUpperCase()));
  });
  
  return capsArray.join(' ');
}

// Using map() and slice()
function capSentence(text) {
  text = text.toLowerCase().split(' ');
  return text.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// Using map() and replace()
function capSentence(text) {
  text = text.toLowerCase().split(' ');
  return text.map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
}



module.exports = capSentence
