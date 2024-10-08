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

/*
Task-3:
Write a function to count the number of vowels in a string.
*/

/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

/*
Task-5:
Generate a random number between 10 to 20.
 */
