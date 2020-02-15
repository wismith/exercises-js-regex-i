/**
 * Returns `true` if the given text contains a phone number
 * and `false` otherwise.
 */
function containsPhoneNumber(text) {
  let numberFormat = /\d\d\d-\d\d\d-\d\d\d\d/g;
  return numberFormat.test(text);
}

/**
 * Returns an array of all the phone numbers in the given text.
 *
 * @examples
 * // Returns ['555-123-4567', '123-456-0123', '784-987-6543']
 * findAllPhoneNumbers('555-123-4567, 123-456-0123, and 784-987-6543');
 */
function findAllPhoneNumbers(text) {
  let numberFormat = /\d\d\d-\d\d\d-\d\d\d\d/g;
  if (!containsPhoneNumber(text)) {
    return null;
  }
  let matches = [];
  let phoneNumbers = text.matchAll(numberFormat);
  for (let match of phoneNumbers) {
    matches.push(match[0]);
  }
  return matches;
}

/**
 * Replaces all phone numbers with X's, except the last four
 * digits.
 *
 * @example
 * hidePhoneNumber('Call me at 555-213-5681!'); // => 'Call me at XXX-XXX-5681!'
 */
function hidePhoneNumber(string) {
  return '';
}

/**
 * Replaces all phone numbers without hyphens or with periods (.)
 * instead of hyphens with a hyphenated version.
 *
 * formatPhoneNumbers('My number is 555.312.8282');
 *
 */
function formatPhoneNumbers(string) {
  return '';
}

// Test different inputs.
let phoneNumber = '555-319-0101'
let text = `Hi! You can call me at ${phoneNumber}.`;
let lotsOfNumbers = 'My phone number is 555-123-4567. Your phone number is 231-180-0101, right? But who has 501-456-1234 for a phone number?';

console.log('Checking the following text for phone numbers:');
console.log(text);
console.log();

if (containsPhoneNumber(text)) {
  console.log('Found a phone number!')
} else {
  console.log('Ut oh, no phone number found.');
}
console.log();
console.log('-'.repeat(10));
console.log();


console.log('Finding all phone numbers in the following text:');
console.log(lotsOfNumbers);

let phoneNumbers = findAllPhoneNumbers(lotsOfNumbers);

console.log();
console.log(`We found ${phoneNumbers.length} phone numbers.`)
for (let number of phoneNumbers) {
  console.log(`* ${number}`);
}
console.log();
console.log('-'.repeat(10));
console.log();

console.log('Formatting phone numbers:')
let phoneNumbersToFormat = [
  '123-456-7891',
  '1234564321',
  '555.666.7777',
  '123-456-789 and 5678345123 and 555.123.4321'
];

for (let number of phoneNumbersToFormat) {
  console.log('Before:', number);
  console.log('After: ', formatPhoneNumbers(number));
  console.log();
}
