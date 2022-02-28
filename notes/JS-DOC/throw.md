# throw

The `throw` throws a user-defined exception. Execution of the current function will stop (the statements after `throw` won't be executed), and control will be passed to the first [`catch`](try...catch) block in the call stack. If no `catch` block exists among caller functions, the program will terminate.

## Syntax

    throw expression;

`expression`  
The expression to throw.

## Description

Use the `throw` statement to throw an exception. When you throw an exception, `expression` specifies the value of the exception. Each of the following throws an exception:

    throw 'Error2'; // generates an exception with a string value
    throw 42;       // generates an exception with the value 42
    throw true;     // generates an exception with the value true
    throw new Error('Required');  // generates an error object with the message of Required

Also note that the `throw` statement is affected by [automatic semicolon insertion (ASI)](../lexical_grammar#automatic_semicolon_insertion) as no line terminator between the `throw` keyword and the expression is allowed.

## Examples

### Throw an object

You can specify an object when you throw an exception. You can then reference the object's properties in the `catch` block. The following example creates an object of type `UserException` and uses it in a `throw` statement.

    function UserException(message) {
      this.message = message;
      this.name = 'UserException';
    }
    function getMonthName(mo) {
      mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      if (months[mo] !== undefined) {
        return months[mo];
      } else {
        throw new UserException('InvalidMonthNo');
      }
    }

    try {
      // statements to try
      var myMonth = 15; // 15 is out of bound to raise the exception
      var monthName = getMonthName(myMonth);
    } catch (e) {
      monthName = 'unknown';
      console.error(e.message, e.name); // pass exception object to err handler
    }

### Another example of throwing an object

The following example tests an input string for a U.S. zip code. If the zip code uses an invalid format, the throw statement throws an exception by creating an object of type `ZipCodeFormatException`.

    /*
     * Creates a ZipCode object.
     *
     * Accepted formats for a zip code are:
     *    12345
     *    12345-6789
     *    123456789
     *    12345 6789
     *
     * If the argument passed to the ZipCode constructor does not
     * conform to one of these patterns, an exception is thrown.
     */

    function ZipCode(zip) {
      zip = new String(zip);
      pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
      if (pattern.test(zip)) {
        // zip code value will be the first match in the string
        this.value = zip.match(pattern)[0];
        this.valueOf = function() {
          return this.value
        };
        this.toString = function() {
          return String(this.value)
        };
      } else {
        throw new ZipCodeFormatException(zip);
      }
    }

    function ZipCodeFormatException(value) {
      this.value = value;
      this.message = 'does not conform to the expected format for a zip code';
      this.toString = function() {
        return this.value + this.message;
      };
    }

    /*
     * This could be in a script that validates address data
     * for US addresses.
     */

    const ZIPCODE_INVALID = -1;
    const ZIPCODE_UNKNOWN_ERROR = -2;

    function verifyZipCode(z) {
      try {
        z = new ZipCode(z);
      } catch (e) {
        if (e instanceof ZipCodeFormatException) {
          return ZIPCODE_INVALID;
        } else {
          return ZIPCODE_UNKNOWN_ERROR;
        }
      }
      return z;
    }

    a = verifyZipCode(95060);         // returns 95060
    b = verifyZipCode(9560);          // returns -1
    c = verifyZipCode('a');           // returns -1
    d = verifyZipCode('95060');       // returns 95060
    e = verifyZipCode('95060 1234');  // returns 95060 1234

### Rethrow an exception

You can use `throw` to rethrow an exception after you catch it. The following example catches an exception with a numeric value and rethrows it if the value is over 50. The rethrown exception propagates up to the enclosing function or to the top level so that the user sees it.

    try {
      throw n; // throws an exception with a numeric value
    } catch (e) {
      if (e <= 50) {
        // statements to handle exceptions 1-50
      } else {
        // cannot handle this exception, so rethrow
        throw e;
      }
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-throw-statement">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-throw-statement</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`throw`

1

12

1

5

4

1

1

18

4

10.1

1

1.0

## See also

-   [`try...catch`](try...catch)
-   [`Error`](../global_objects/error)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw</a>
