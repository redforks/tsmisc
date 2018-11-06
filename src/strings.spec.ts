import { insertAt } from './strings';

it('insertAt', () => {
  expect(insertAt('', 0, '')).toBe('');
  expect(insertAt('', 100, 'a')).toBe('a');
  expect(insertAt('123', 0, 'a')).toBe('a123');
  expect(insertAt('123', 3, 'a')).toBe('123a');
  expect(insertAt('123', 1, 'a')).toBe('1a23');
  expect(insertAt('123', 10, 'a')).toBe('123a');
});
