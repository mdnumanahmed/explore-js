/*
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 501
if(burgerPrice > 500){
    console.log('Please take your free Coke');
}else{
    console.log('Please pay 30 tk for Code');
}

// Using Ternery
let offer = burgerPrice > 500 ? 'Free Coke' : 'Pay 30 tk for Coke'
console.log(offer);


/*

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 45
let height = 1.33
let BMI = weight / (height * height)
console.log(BMI);
let health = ''
if(BMI < 18.5){
    health = 'You are underweight'
}else if(BMI >= 18.5 && BMI <= 24.9){
    health = 'You are normal'
}else if(BMI >= 25 && BMI <= 29.9){
    health = 'You are overweight'
}else {
    health = 'You are obese'
}
console.log(health);


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let score = 59
let grade = ''
if(score >= 90 && score <= 100){
    grade = 'A'
}else if(score >= 80 && score <=89){
    grade = 'B'
}else if(score >= 70 && score <= 79){
    grade = 'C'
}else if(score >= 60 && score <=69){
    grade = 'D'
}else if(score >= 0 && score <= 59){
    grade = 'F'
}else{
    grade = 'Your input is out of range. Please provide carefully.'
}
console.log(grade);

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let yourMark = 85
let friendsMark = 80
let treat = ''
if(yourMark > 80){
    if(friendsMark >= 80){
        treat = 'go for a lunch.'
    }else if(friendsMark < 80 && friendsMark>= 60){
        treat = 'tell your friend, good luck next time.'
    }else if(friendsMark < 60 && friendsMark >= 40){
        treat = 'keep your friend\'s message unseen.'
    }else if(friendsMark < 40){
        treat = 'block your friend'
    }
}else{
    treat = 'go to home and sleep and act sad.'
}
console.log(treat);


/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
let num1 = 20
let num2 = 10
let result = num1 > num2 ? num1 * 2 : num1 + num2
console.log(result);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 9
let ticketFare = ''
if(age < 10){
    ticketFare = 'Free of cost'
}else if(age < 25){
    ticketFare = '50% Discount'
}else if(age < 60){
    ticketFare = 'Ticket fare 800 tk'
}else if(age >= 60){
    ticketFare = '15% Discount'
}
console.log(ticketFare);
