const rangeSum = require('./index');

test('rageSum is a function', () => {
  expect(typeof rangeSum).toEqual('function');
});

test('whereIBelong is a function', () => {
  expect(whereIBelong([1,9])).toEqual(45);
});
