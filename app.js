/*2. Define a function [...] maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.*/

// Long version
const maxOfThreeLong = (a, b, c) => {
  if(a>b) {
      if(a>c) return a;
      else return c;
  } else {
      if(b>c) return b;
      else return c;
  }
}

// Short version
const maxOfThree = (a, b, c) => {
  return a>b ? (a>c ? a : c) : (b>c ? b : c); 
}



/*3. Define a function [...] isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.*/

const isCharAVowel = (char) => {
  return (char === 'a' || char ==='e' || char === 'i' || char === 'o' || char === 'u');
}



/*4. Define a function [...] sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.*/

// Long version
const sumArrayLong = (arrayOfNumbers) => {
  let sum = 0;
  for(let i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum;
}

// Short version
const sumArray = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((a,b) => a+b);
}



/*5. Define a function [...] multiplyArray that takes an array of numbers and returns the product [of] those numbers. For example, multiplyArray([2, 4, 5]); would return 40.*/

// Long version
const multiplyArrayLong = (arrayOfNumbers) => {
  let product = 1;
  for(let i=0; i<arrayOfNumbers.length; i++) {
    product *= arrayOfNumbers[i];
  }
  return product;
}

// Short version
const multiplyArray = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((a,b) => a*b);
}



/*6. Define a function [...] numArgs that returns the number of arguments passed to the function when called.*/

// The 'arguments' object only exists for non-arrow functions
function numArgs() {
  return arguments.length;
}



/*Define a function [...] reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".*/

// Long version
const reverseStringLong = (str) => {
  let splitStr = str.split('');
  let revStr = "";
  for (let i=0; i<str.length; i++) {
    revStr += splitStr[str.length-i-1];
  }
  return revStr;
}



// Short version
const reverseString = (str) => {
  return [...str].reverse().reduce((a,b) => a+b);
}



/*Define a function [...] longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.*/

// Long version
const longestStringInArrayLong = (arrayOfStrings) => {
  let longestString = arrayOfStrings[0];
  for(let i=1; i<arrayOfStrings.length; i++) {
    console.log(longestString);
    if(longestString.length < arrayOfStrings[i].length) {
      longestString = arrayOfStrings[i];
    }
  }
  return longestString;
}

// Short version
const longestStringInArray = (arrayOfStrings) => {
  return arrayOfStrings[(Math.max(...arrayOfStrings.map(str => str.length))) - 1];
}



/*9. Define a function [...] stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]*/

// Long version
const stringsLongerThanLong = (arrayOfStrings, n) => {
  let minLength = n+1;
  let arrayOfLongStrings = [];
  for(let i=0; i<arrayOfStrings.length; i++) {
    if(arrayOfStrings[i].length >= minLength) {
      arrayOfLongStrings.push(arrayOfStrings[i]);
    }
  }
  return arrayOfLongStrings;
}

// Short version
const stringsLongerThan = (arrayOfStrings, n) => {
  return arrayOfStrings.filter((str) => str.length > n);
}

