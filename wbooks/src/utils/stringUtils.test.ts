import { getInitials, keepNumbers } from './stringUtils';

describe('Get initials testing', () => {
  test('I only get initials', () => {
    expect(getInitials('React Native')).toBe('R N');
    expect(getInitials('Wolox')).toBe('W');
  });

  test('No string provided', () => {
    expect(getInitials()).toBeUndefined();
  });
});

describe('Keep numbers testing', () => {
  test('Works as expected', () => {
    expect(keepNumbers('osde2021')).toBe('2021');
    expect(keepNumbers('t1h2i3s4i5s6a7t8e9s0t')).toBe('1234567890');
  });

  test('Only numbers', () => {
    expect(keepNumbers(2048)).toBe('2048');
    expect(keepNumbers('1020')).toBe('1020');
  });

  test('No output', () => {
    expect(keepNumbers()).toBeFalsy();
  });
});
