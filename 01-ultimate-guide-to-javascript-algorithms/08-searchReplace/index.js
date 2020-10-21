/* CHALLENGE
searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
should return "He is Sitting on the couch"
*/

// Using replace()
function searchReplace(str,word,newWord) {
  if (word[0] === word[0].toUpperCase()) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }

  return str.replace(word,newWord);
}


// Using Regex 
function searchReplace(str,word,newWord) {
  let regex = new RegExp(word, 'gi');
  if (/[A-Z]/.test(word[0])) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }

  return str.replace(regex,newWord);
}
