# Regular Expressions I - JavaScript Exercises

One of the most common things we do with text data is search for patterns within it. We might search for text that looks like a web address so that we can automatically convert it into a link or an email address so that we can anonymize it.

Regular expressions allow us to express complex patterns to search for. For example, a simple text search with Ctrl-F (⌘F on a Mac) allows us to search for one *particular* string. With regular expressions we can express patterns like "Any three digits followed by a `-` followed by another three digits."

## Contents <!-- omit in toc -->

## Instructions

All work will happen in `phoneNumbers.js`. We're going to write regular expressions to search for phone numbers in a larger string.

### Basic US Phone Numbers

To start, we'll assume a phone number will look like `XXX-XXX-XXXX` where `X` is some digit. Make the various functions inside `phoneNumbers.js` work as intended.

### Full US Phone Numbers

In reality, US phone numbers look like

```text
NXX-NXX-XXXX
```

where `N` is a digit between `2` and `9`, and `X` is any digit between `0` and `9`. Modify `phoneNumbers.js` so it detects those numbers.

For example, `012-456-1234` is *not* a valid US phone number.

### With Country Code

Add support for the US country code, so that, say, `1-800-555-1234` is now a valid number. It should still detect `800-555-1234` as a valid number, too. Regular expressions support the ability to *optionally* match part of a string, so only one regular expression is required.

## Resources

- [RegExr][url-regexr], an interactive regular expression tool
- The [Regular Expressions][url-eloquent-js-regex] chapter from *[Eloquent JavaScript][url-eloquent-js]*.
- [A Practical Guide to Regular Expressions in JavaScript][url-practical-regex-js]

Use the following resources if you're not sure where to

[url-regexr]: https://regexr.com/
[url-eloquent-js]: https://eloquentjavascript.net
[url-eloquent-js-regex]: https://eloquentjavascript.net/09_regexp.html
[url-practical-regex-js]: https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4
