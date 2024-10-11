/* ==================================================
                WHILE
====================================================*/
/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */
let times = 1
while(times <= 60){
    console.log('I will invest at least 6 hrs every single day for next 60 days!');
    times++
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
let n = 61;
while(n <= 100){
    if(n % 2 !== 0){
        console.log(n);
    }
    n++
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
{
    let i = 78
    while(i <= 98){
        if(i % 2 === 0){
            console.log(i);
        }
        i++
    }
}
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
{
    let num = 81
    let sum = 0
    while(num <= 131){
        if(num % 2 === 1){
            sum += num
        }
        num++
    }
    console.log(sum);
}
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
{
    let num = 206
    let sum = 0
    while(num <= 311){
        if(num % 2 === 0){
            sum += num
        }
        num++
    }
    console.log(sum);
}

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */
{
    let number = 1
    while(number <=10){
        console.log(5 + " * " + number + ' = ' + 5*number);
        number++
    }
}

/***

Implement a countdown timer that counts down from 21 to 15.

 */
{
    let count = 21
    while(count >= 15){
        console.log(count);
        count--
    }
}


/* ==================================================
                FOR
====================================================*/
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */
{
    for(let i = 1; i <= 60; i++){
        console.log('"I will invest at least 6 hrs every single day for next 60 days!"');
    }
}


/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
{
    for(let i = 61; i <= 100; i+=2){
        console.log(i);
    }

    for(let i = 61; i <= 100; i++){
        if(i%2=== 1){
            console.log(i);
        }
    }
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
{
    for(let i = 78; i <= 98; i+=2){
        console.log(i);
    }

    for(let i = 78; i <= 98; i++){
        if(i%2 !== 1){
            console.log(i);
        }
    }
}


/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
{
    let sum = 0
    for(let i = 91; i <= 129; i+=2){
        console.log(sum+=i);
    }
    console.log(sum);

    let sum1 = 0
    for(let i = 91; i <= 129; i++){
        if(i%2=== 1){
            console.log(sum1+=i);
        }
    }
    console.log(sum1);
}
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
{
    let sum1 = 0
    for(let i = 51; i <= 85; i++){
        if(i%2=== 0){
            console.log(sum1+=i);
        }
    }
    console.log(sum1);
}



/***
Generate a multiplication table for number 9
 */
{
    for(let i = 1; i<=10;i++){
        console.log(9 + ' * ' + i + ' = ' + 9*i);
    }
}

/***
Implement a countdown timer that counts down from 81 to 65.
 */
{
    for(let i = 81; i >=65; i--){
        console.log(i);
    }
}


/* ==================================================
                CONTINUE
====================================================*/
/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
{
    for(let i = 1; i <= 40; i++){
        if(i % 2 === 1){
            continue
        }
        console.log(i);
    }
}


/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
{
    for(let i = 55; i <= 85; i++){
        if(i % 2 !== 1 || i % 5 === 0){
            continue
        }
        console.log(i);
    }
}

/* ==================================================
                BREAK
====================================================*/
/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/
{
    for(let i = 1; i <= 200; i++){
        if(i === 100){
            break
        }
        console.log(i);
    }
}


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
{
    let num = 1
    let sum = 0
    while(num <= 65){
        sum+=num
        if(sum > 100){
            break
        }
        console.log(sum);
        num++
    }
}


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
{
    // Formula for Square number    (i > 0 && Math.sqrt(i) % 1 === 0)
    for(let i = 1; i <= 100; i++){
        if(i > 1 && Math.sqrt(i) % 1 === 0){
            console.log(i);
            break
        }
        console.log(i);
    }
}


