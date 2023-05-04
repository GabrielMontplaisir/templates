// Celsius to Farenheit
// Converts celsius temperature to Farenheit

function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// Reverse a String
// Takes a string (like "hello") and reverses it (e.g. "olleh")

function reverseStr(str) {
  return str.split("").reverse().join("");
}

// Factorialize a Number
// A factor (num!) is when you multiply from 1 to num. For example, 5! = 1 * 2 * 3 * 4 * 5 = 120
// This function is recursive and multiplies num until it's < 1.

function factorialize(num) {
  return num > 1 ? num * factorialize(num - 1) : 1;
}

// Longest word in string
// Takes a string, evaluates each word, and returns the number of characters in the longest word.
// "The quick brown fox jumps over the lazy river" returns 6

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

// Largest number in array
// Takes an array, and outputs the largest value of in the array (and sub-arrays)

function largestOfFour(arr) {
  return arr.map((val) => Math.max(...val));
}

// Confirm the ending
// Checks whether a string ends with the target. Target can be any number of characters.
// Fairly certain "negative" lengths will check from the last character first.
// In ES15, you can use the .endsWith() method.

function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

// Repeat a string
// Repeat a string "num" amount of times. Return empty is num is a negative number. Recursive function
// You can also use the .repeat() method.

function repeatString(str, num) {
  return num > 0 ? str + repeatString(str, num - 1) : "";
}

// Truncate a string
// Takes a string, and "cuts" it when it's longer than "num". Replaces w/ ...
// If length of string is longer than num, just output the string.

function truncateStr(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

// Return when first is true
// Looks through an array and returns true for the first element that passes the test. If none are true, then returns false.

function findElement(arr, func) {
  return arr.find(func);
}

// Check if value is boolean primitive
// In other words, check if a value is either TRUE or FALSE

function isBool(bool) {
  return typeof bool === "boolean";
}

// Title case a sentence
// Make the first letter of every word in a sentence have a capitalized letter, and lower case for the rest.
// Ex: TEST SENTENCE => Test Sentence
// Uses RegEx: "/g" is for the global modifier checks for the pattern in the whole string.
// \S checks for all non-whitespace characters
// (^) checks the start of the string
// (\s) checks after any whitespace character
// | pipe is the OR operator

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

// Capitalize sentence
// Takes a string, and capitalizes the first letter in the sentence.

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Copy the first item (array) into the second item (another array), at the selected index. Returns new array without modifying original two.
// Fairly certain this can normally be solved w/ arr2.toSpliced(n,0,...arr1), but didn't work on FCC.

function spliceArr(arr1, arr2, n) {
  const newArr = [...arr2];
  return newArr.splice(n, 0, ...arr1);
}

// Remove falsy values from array. Returns new array.
// Falsy values are false, null, 0, "", undefined, NaN.

function bouncer(arr) {
  return arr.filter(Boolean);
}

// Return the lowest index at which a value (second arg) should be inserted in an array (first arg).
// Counts the number of values that are smaller than num. Then num would be inserted afterwards.

function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

// Check if all letters from second word present in first word. The array only contains two elements.
// "Hello" + "Hello" = true
// "Hello" + "hey" = false (no y in hello)
// "Alien" + "line" = true
// new RegExp() allows us to test variables. In this case, we test all the letters from the first word (use 'i' to ignore case-sensitivity) to the second.

function mutation(arr) {
  const regex = new RegExp(`[^${arr[0]}]`, "i");
  return !regex.test(arr[1]);
}

// Split array into groups of "size".
// Start a new array. As we splice (cut) the array from index 0 to index "size", we push it to the new Array.

function chunkArray(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

// Copy array 'num' times in a new array
function copyArray(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

// Filtered Array
// Takes an array with subarrays and an element. Returns the subarrays which do not contain the element.

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Recreating the .map() method for arrays.
// For the record....Just use .map()

Array.prototype.myMap = function (callback) {
  const newArray = [];
  this.forEach((...args) => {
    newArray.push(callback(...args));
  });
  return newArray;
};

// Recreating the .filter() method for arrays
// For the record...Just use filter()
// Difference between this one and .map() is that we need to call the specific arguments.
// It worked with (...args), followed by a push(this[args[1]]), but there's no guarantee that "1" is always the index. Felt better to simply specify.

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  this.forEach((element, index, array) => {
    if (callback(element, index, array)) {
      newArray.push(this[index]);
    }
  });
  return newArray;
};

// Return squared numbers for positive integers only
// Ex: squareList([-3, 4.8, 5, 3, -3.2]); Returns [25,9]
// .reduce() is a bit of a complex method...
// sqrInts is the value which accumulates from the previous callback function.
// num is the current value being iterated.
// The 3rd argument (currently absent) would be the index.
// The 4th argument (also absent) would be the array reduce() was called on.
// The square brackets at the end is the "initial value" when the accumulator (1st argument) is called for the first time. In this case, an empty array.

const squareList = (arr) => {
  // Only change code below this line
  return arr.reduce((sqrInts, num) => {
    if (num > 0 && Number.isInteger(num)) {
      return sqrInts.concat(num * num);
    }
    return sqrInts;
  }, []);
  // Only change code above this line
};

// Sort an array in ascending numerical order
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// Sort an array in reverse alphabetical order
function sortReverseAlpha(arr) {
  return arr.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1));
}

// Currying a function
// Currying is the concept of taking one function with multiple arguments, and splitting it into multiple functions which takes each argument separately.
// i.e. func(x,y,z) => func(x)(y)(z)

function curryAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Sum all numbers in a range
const sumRange = (arr) => {
  const startNum = Math.min(...arr);
  const endNum = Math.max(...arr);
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2; // [1,4] => ((1 + 4) * 4) / 2
  return sum;
};

// Difference of two arrays
// Take advantage of the unique values in Sets to check if the 2nd array has an item in the first. If so, delete the item in the set. Otherwise, add it.
// Will return the items which are not in the first list.

function diffArray(arr1, arr2) {
  const newArr = new Set(arr1);
  arr2.forEach((item) =>
    newArr.has(item) ? newArr.delete(item) : newArr.add(item)
  );
  return Array.from(newArr);
}

// Remove values (2nd arg onwards) from array (1st arg)
// Takes an array as first argument, then iterates through to see if the following arguments are in the array. If they are, remove them.

function destroyer(arr, ...args) {
  return arr.filter((elem) => !args.includes(elem));
}

// Takes an array of objects (1st arg), and returns array of matching name and values (second arg)

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter((obj) =>
    sourceKeys.every((key) => obj[key] === source[key])
  );
}

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
// Find capital letters, then spaces, then underscores. Join the split with dashes, then lowercase everything.

function spinalCase(str) {
  return str
    .split(/(?=[A-Z])|\s|_/)
    .join("-")
    .toLowerCase();
}

// Translate pig latin
// If word starts w/ consonent, take the first consonant or cluster and move it to the end, then add 'ay'.
// If starts w/ a vowel, add "way" at the end.

function translatePigLatin(str) {
  const consRegEx = /^[^aeiou]+/;
  const consonants = str.match(consRegEx);
  return consonants
    ? str.replace(consonants, "").concat(consonants) + "ay"
    : str + "way";
}

// Search and Replace
// Provided a string (1st arg), search for a value (2nd arg), and replace it with the new value (3rd arg)
// Preserve capitalization of the searched value.

function myReplace(str, before, after) {
  const upperCase = /^[A-Z]/;
  if (upperCase.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

// Map a pair

function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return str.split("").map((key) => [key, pairs[key]]);
}

// Find missing leter, and return it
// Each letter has a unique character code. a to z increments by one every time. If there's a missing letter, it will increment by two.
// The code will detect if the jump is greater than one, and return the character before it (Hence String.fromCharCode(str.charCodeAt(i) - 1))

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i));
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
}

// Sorted "unique" arrays
// Takes two arrays, combines them and only copies the unique values.

const uniteUnique = (...arr) => [...new Set(arr.flat())];

// Replace symbols by HTML entities
// The RegEx checks for symbols which are not spaces.
// The "match" parameter will look through what was returned from the RegEx.

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;",
  };
  const charRegEx = /(?!\s)\W/g;
  return str.replace(charRegEx, (match) => htmlEntities[match]);
}

// Calculate odd numbers from Fibonnaci sequence, up to a number

function sumFibs(num) {
  if (num < 0) return 0;
  let result = 0,
    prevNum = 0,
    currentNum = 1;
  while (currentNum <= num) {
    if (currentNum % 2 !== 0) {
      result += currentNum;
    }
    currentNum += prevNum;
    prevNum = currentNum - prevNum;
  }
  return result;
}

// Sum primes
// From an argument num, sum all the prime numbers that are less than or equal to num.
// Based on Sieve of Eratosthenes

function sumPrimes(num) {
  let isPrime = Array(num + 1).fill(true);
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.reduce((sum, prime, i) => (prime ? sum + i : sum), 0);
}

// Find smallest common multiple
// Given an array of two numbers, finds the smallest common multiple of all the numbers between them.

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b); // arrange array from smallest to biggest
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min); // Create an array and fill it from min to max
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // Greatest common denominator, based on Euclid's Algorithm. If B is 0, then return the multiple. Otherwise, recurse through.
  const lcm = (a, b) => (a * b) / gcd(a, b); // least common multiple, using GCD. You can find the LCM by multiplying the multiple by the current number, then dividing it by the GCD.

  return range.reduce((multiple, current) => lcm(multiple, current)); // Iterate through the multiples and the numbers from min to max.
}

// Drop arrays until a certain value.
// Given an array (1st arg), continue dropping elements until the first element that satisfies the function (2nd arg), then return the rest.

function dropElements(arr, func) {
  let index = arr.findIndex(func);
  return arr.slice(index >= 0 ? index : arr.length);
}

// Flatten a nested array
// For the record, just use .flat()

function flattenArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flattenArray(flat) : flat;
}

// Read a binary string
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map((char) => parseInt(char, 2))
  );
}

// Check if the 2nd arg is truthy on all elements of a collection (1st arg)

function truthCheck(collection, pre) {
  return collection.every((param) => param[pre]);
}

// Sum together or curry sum
// Sums two arguments together. If only one argument provided, create a curry function that will add the next.

function addTogether() {
  const [first, second] = arguments;

  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;

  return first + second;
}

// Return a new array that transforms altitudes into orbital periods
// According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:
// T = (2*pi) * sqrt(a³/mu)
// a = orbit's semi-major axis
// mu = GM is the standard gravitational parameter
// G is the gravitational constant
// M is the mass of the more massive body

// Rounded to the nearest whole number

function orbitalPeriod(arr) {
  const GM = 398600.4418; // in km³s⁻2
  const earthRadius = 6367.4447; // in km

  const orbital = arr.map(({ name, avgAlt: orbitalPeriod }) => {
    orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + orbitalPeriod, 3) / GM)
    );
    return { name, orbitalPeriod };
  });
  return orbital;
}

// Calculate percentages

const calculatePercent = (value, total) => Math.round((value / total) * 100);

// Get Random Element

const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

// Remove duplicates

const removeDuplicates = (arr) => [...new Set(arr)];

// Sort elements by a certain property

const sortBy = (arr, key) =>
  arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

// Check if Arrays/Objects are equal

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Count # of occurences in an array

const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// Wait a certain amount of time

const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

// Pluck property from an array of objects

const pluck = (objs, key) => objs.map((obj) => obj[key]);

// Insert element at a certain position in an array

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];
