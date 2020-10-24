const pigLatin = require('./index')

// For words that begin with consonant sounds
test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function')
})

// For words that begin with consonant clusters
test('the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed', () => {
  expect(pigLatin('glove', 'oveglay')).toBeTruthy()
})

// For words that begin with vowel sounds
test('add "way" to the end of the word', () => {
  expect(pigLatin('explain', 'explainway')).toBeTruthy()
})
