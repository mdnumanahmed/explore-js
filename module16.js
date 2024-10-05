/* ========================================
Batch-09 : Practice Task
===========================================*/
/* 
Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
 */

const obtainedMoney = 1000;
const orangePrice = 400
const applePrice = 300
const returnedMoney = obtainedMoney - (orangePrice + applePrice)
console.log(returnedMoney);



/* 
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
 */
const Marks = {
    Mathematics:75.25,  
    Biology: 65,  
    Chemistry:80, 
    Physics:35.45,  
    Bangla:99.50 
}
const totalMarks = Object.values(Marks).reduce((prev,curr)=>prev+curr)
const avg = Number((totalMarks / 5).toFixed(2))
console.log(avg);


/* 
Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4
 */
const givenNumber = 119
const remainder = givenNumber % 5
console.log(remainder);

/* 
Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
 */
var a = isNaN('11');
console.log(a);
var a = isNaN(2-10);
console.log(a);

