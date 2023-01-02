'use strict';

const githubUsernameRegex = require('.');
const {strictEqual} = require('assert');

for (const validName of [
  'a',
  'A',
  'abc',
  'DEF',
  'Ghi',
  'a-z',
  'a-b-c',
  'a-',
  '0',
  '10',
  '1-2',
  '1-22-333-4444',
  'abc123',
  'abc-123',
  'x'.repeat(39),
  'a'.concat('b-'.repeat(19))
]) {
  strictEqual(
    githubUsernameRegex.test(validName),
    true,
    `Expected "${validName}" to be considered as a valid Github username, but it wasn't.`
  );
}

for (const invalidName of [
  '',
  ' ',
  'a b',
  'a ',
  ' b',
  '-',
  '-b',
  'a--',
  'a--b',
  'a_b',
  'a\nb',
  'Ａ',
  '１',
  'あ',
  '🍣',
  String.fromCharCode(15),
  'x'.repeat(40),
  'aa'.concat('b-'.repeat(19))
]) {
  strictEqual(
    githubUsernameRegex.test(invalidName),
    false,
    `Expected ${JSON.stringify(invalidName)} to be considered as an invalid Github username, but it wasn't.`
  );
}

console.log('All tests passed.');
