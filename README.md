# github-username-regex

[![NPM version](https://img.shields.io/npm/v/github-username-regex.svg)](https://www.npmjs.com/package/github-username-regex)
[![Bower version](https://img.shields.io/bower/v/github-username-regex.svg)](https://github.com/shinnn/github-username-regex/releases)
[![Build Status](https://travis-ci.org/shinnn/github-username-regex.svg?branch=master)](https://travis-ci.org/shinnn/github-username-regex)

A regular expression that only matches a valid [Github](https://github.com/) username

```javascript
import githubUsernameRegex from 'github-username-regex';

githubUsernameRegex.test('john'); //=> true
githubUsernameRegex.test('john-due'); //=> true
githubUsernameRegex.test('john--due'); //=> false
```

According to the form validation messages on [*Join Github*](https://github.com/join) page,

* Github username may only contain alphanumeric characters or hyphens.
* Github username cannot have multiple consecutive hyphens.
* Github username cannot begin with a hyphen.
** Github previously allowed usernames to end with a hyphen, but does not anymore.
* Maximum is 39 characters.

## Installation

### [npm](https://www.npmjs.com/)

```
npm install github-username-regex
```

### [bower](https://bower.io/)

```
bower install github-username-regex
```

## API

```javascript
import githubUsernameRegex from 'github-username-regex';
```

### githubUsernameRegex

Type: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) (`/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i`)

```javascript
// Returns `true`
githubUsernameRegex.test('a');
githubUsernameRegex.test('0');
githubUsernameRegex.test('a-b');
githubUsernameRegex.test('a-b-');
githubUsernameRegex.test('a-b-123');
githubUsernameRegex.test('a'.repeat(39));

// Returns `false`
githubUsernameRegex.test('');
githubUsernameRegex.test('a_b');
githubUsernameRegex.test('a--b');
githubUsernameRegex.test('a-b--');
githubUsernameRegex.test('-a-b');
githubUsernameRegex.test('a'.repeat(40));
```

Note that this module doesn't take reserved usernames into consideration. For example it matches `help`, `about` and `pricing`, though they are reserved words and cannot be used as Github usernames.

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
