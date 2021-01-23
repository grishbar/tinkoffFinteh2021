const getMaxTestsAmount = require('./second-task.js');

test('second task: input - "4 7" expected to be 4', () => {
  expect(getMaxTestsAmount(4, 7)).toBe(4);
});

test('second task: input - "10 100" expected to be 9', () => {
  expect(getMaxTestsAmount(10, 100)).toBe(9);
});

test('second task: input - "10 100" expected to be 0', () => {
  expect(getMaxTestsAmount(12, 21)).toBe(0);
});

test('second task: input - "10 100" expected to be 19', () => {
  expect(getMaxTestsAmount(1, 111)).toBe(19);
});

