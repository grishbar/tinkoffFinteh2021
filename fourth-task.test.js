const getStudentChange = require('./fourth-task.js');

test('fourth task: input - "4 7" expected to be 4', () => {
  expect(getStudentChange([1, 2, 3])).toBe('-1 -1');
});

test('fourth task: input - "10 100" expected to be 9', () => {
  expect(getStudentChange([1, 3, 1])).toBe('1 2');
});
