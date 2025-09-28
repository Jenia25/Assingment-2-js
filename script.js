// 1. Check if a Number is Positive, Negative, or Zero
function checkNumber(num) {
  if (num > 0) {
    return "The number is Positive";
  } else if (num < 0) {
    return "The number is Negative";
  } else {
    return "The number is Zero";
  }
}

console.log(checkNumber(6));

// 2. Check if a Number is Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "The number is Even";
  } else {
    return "The number is Odd";
  }
}

console.log(checkEvenOdd(7));


// 3. Find the Largest of Three Numbers
function largestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return "The largest number is " + a;
  } else if (b >= a && b >= c) {
    return "The largest number is " + b;
  } else {
    return "The largest number is " + c;
  }
}

console.log(largestOfThree(6, 9, 34));

// 4. Check if a Person is an Adult
function isAdult(age) {
  if (age >= 18) {
    return "The person is an Adult";
  } else {
    return "The person is a Minor";
  }
}

console.log(isAdult(21));

// 5. Check if a Year is a Leap Year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2005));

// 6. Check if a String is a Palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("hi"));
console.log(isPalindrome("hello"));

// 7. Find the Smaller of Two Numbers

function smallerOfTwo(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(smallerOfTwo(10, 6));

// 8. Check if a Number is Divisible by 5 and 10
function divisibleBy5And10(num) {
  if (num % 5 === 0 && num % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisibleBy5And10(80));

// 9. Sum of Two Numbers
function sum(a, b) {
  return a + b;
}
console.log(sum(15, 15));

function getStringLength(str) {
  return str.length;
}
console.log(getStringLength("Smriti"));

// 11. Check if a Number is Prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));

// 12. Find the First Character of a String

function firstChar(str) {
  if (str.length > 0) {
    return str.charAt(0);
  } else {
    return "String is empty";
  }
}
console.log(firstChar("Jenia"));