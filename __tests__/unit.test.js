// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Tests for isPhoneNumber
test('Incorrect number', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});
test('Correct number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Empty number', () => {
  expect(isPhoneNumber('')).toBe(false);
});
test('Correct number with spaces', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

// Tests for isEmail
test('Incorrect email', () => {
  expect(isEmail('test.com')).toBe(false);
});
test('Correct email', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});
test('Empty email', () => {
  expect(isEmail('')).toBe(false);
});
test('Correct email with special characters', () => {
  expect(isEmail('test_23wow@hotmail.com')).toBe(true);
});

// Tests for isStrongPassword
test('Short password', () => {
  expect(isStrongPassword('123')).toBe(false);
});
test('Correct password', () => {
  expect(isStrongPassword('test123')).toBe(true);
});
test('Too long password', () => {
  expect(isStrongPassword('blahblahblahblahblah')).toBe(false);
});
test('Underscore password', () => {
  expect(isStrongPassword('test_123')).toBe(true);
});

// Tests for isDate
test('Incorrect date', () => {
  expect(isDate('12/12/12')).toBe(false);
});
test('Correct date', () => {
  expect(isDate('12/12/2012')).toBe(true);
});
test('Empty date', () => {
  expect(isDate('')).toBe(false);
});
test('Correct date with single digits', () => {
  expect(isDate('1/1/2012')).toBe(true);
});
// Tests for isHexColor
test('Incorrect color', () => {
  expect(isHexColor('#12345')).toBe(false);
});
test('Correct color', () => {
  expect(isHexColor('#12fe56')).toBe(true);
});
test('Empty color', () => {
  expect(isHexColor('')).toBe(false);
});
test('Correct color with 3 characters', () => {
  expect(isHexColor('#abc')).toBe(true);
});