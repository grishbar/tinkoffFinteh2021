const getMaxDiff = require('./first-task.js');

test('first task', () => {
  expect(getMaxDiff(2, [1,2,1,3,5])).toBe(16);
});
