const rangeSum = require('./index');

test('rageSum is a function', () => {
  expect(typeof rangeSum).toEqual('function');
});

test('rageSum([1,9]) returns 45', () => {
  expect(rangeSum([1,9])).toEqual(45);
});
