const getMaxTestsAmount = require('./second-task.js');

test('second task: input - "4 7" expected to be 4', () => {
  expect(getMaxTestsAmount(4, 7)).toBe(4);
});
