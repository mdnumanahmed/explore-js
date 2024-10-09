/**
 * Leap Year
 */
function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const isLeap = isLeapYear(2000);
const isLeap1 = isLeapYear(2100);
const isLeap2 = isLeapYear(2400);
const isLeap3 = isLeapYear(2052);
console.log(isLeap, isLeap1, isLeap2, isLeap3);

/* 
js-problems-part1-practice-tasks
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/
{
  function celsiusToFahrenheit(cel) {
    const fahrenheit = (9 / 5) * cel + 32;
    return fahrenheit;
  }
  const fahrenheit = celsiusToFahrenheit(35);
  console.log(fahrenheit);
}
/*
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/
{
  const numbers = [5, 6, 11, 12, 98, 5];
  function countRepeat(numbers, value) {
    let count = 0;
    for (const item of numbers) {
      if (item === value) {
        count++;
      }
    }
    return count;
  }
  const result = countRepeat(numbers, 25);
  console.log(result);
}
{
  // Not accucate
  //   const numbers = [5, 6, 11, 12, 98, 5];
  //   function countRepeat(numbers) {
  //     let count = [];
  //     // let repeated = 0;
  //     for (const number of numbers) {
  //       if (number === numbers[number]) {
  //         count.push(number);
  //         // repeated++;
  //       }
  //     }
  //     // console.log(repeated);
  //     return count.length;
  //   }
  //   const result = countRepeat(numbers);
  //   console.log(result);
}
/*
Task-3:
Write a function to count the number of vowels in a string.
*/
{
  const str = "Write a function to count the number of vowels in a string";
  function countVowel(str) {
    let vowel = "aeiou";
    let count = 0;
    for (const letter of str) {
      if (vowel.split("").includes(letter)) {
        count++;
      }
    }
    return count;
  }
  const result = countVowel(str);
  console.log(result);
}
/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/
{
  const str = "I am learning Programming to become a programmer";
  function longestWord(str) {
    let wordsArray = str.split(" ");
    let longest = "";
    for (const word of wordsArray) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  const result = longestWord(str);
  console.log(result);
}
/*
Task-5:
Generate a random number between 10 to 20.
 */
