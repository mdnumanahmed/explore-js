/* 
Simple function Related Practice Tasks
Task-1
Take four parameters. Multiply the four numbers and then return the result
 */
{
  function multiply(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4;
  }
  const result = multiply(5, 6, 7, 8);
  console.log(result);
}
/*  
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/
{
  function oddEvenOperation(number) {
    if (number % 2 === 1) {
      return number * 2;
    } else {
      return number / 2;
    }
  }
  const result = oddEvenOperation(4);
  console.log(result);
}
/* 
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
{
  const numbers = [5, 10, 15, 30];
  function makeAvg(numbers, size) {
    let total = 0;
    for (const number of numbers) {
      total = total + number;
    }
    return total / size;
  }
  const avg = makeAvg(numbers, numbers.length);
  console.log(avg);
}
/* 
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
{
  const binaryString = "1010101001010101";
  function countZero(bStr) {
    let count = 0;
    for (const zero of bStr) {
      if (zero === "0") {
        count++;
      }
    }
    return count;
  }
  const result = countZero(binaryString);
  console.log(result);
}
/* 
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */
{
  const number = 8;
  function oddEven(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  const result = oddEven(number);
  console.log(result);
}
