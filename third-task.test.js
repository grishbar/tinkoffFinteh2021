const getStudentChange = require('./third-task.js');

test('third task: input - "4 7" expected to be 4', () => {
  expect(getStudentChange([2, 1, 4, 6])).toBe('-1 -1');
});

test('third task: input - "10 100" expected to be 9', () => {
  expect(getStudentChange([1,2])).toBe('-1 -1');
});

test('third task: input - "10 100" expected to be 0', () => {
  expect(getStudentChange([2,1])).toBe('1 2');
});
