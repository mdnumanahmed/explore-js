{
  const heights = [60, 70, 66, 65, 50, 55];
  function lowestHeight(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  }
  const lowest = lowestHeight(heights);
  console.log(lowest);
}

/* 
js-problems-part2-practice-tasks
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/
{
  const numbers = [167, 190, 120, 165, 137];
  function lowestNumber(numbers) {
    let lowest = numbers[0];
    for (const num of numbers) {
      if (num < lowest) {
        lowest = num;
      }
    }
    return lowest;
  }
  const result = lowestNumber(numbers);
  console.log(result);
}
/*
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/
{
  const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
  function smallestName(friends) {
    let smallName = friends[0];
    for (const friend of friends) {
      if (friend.length < smallName.length) {
        smallName = friend;
      }
    }
    return smallName;
  }
  const result = smallestName(friends);
  console.log(result);
}
/*
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/
{
  function calculateElectronicsBudget(laptopQnty, tabletQnty, mobileQnty) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    const allLaptopPrice = laptopPrice * laptopQnty;
    const allTabletPrice = tabletPrice * tabletQnty;
    const allMobilePrice = mobilePrice * mobileQnty;
    const totalBudget = allLaptopPrice + allTabletPrice + allMobilePrice;
    return totalBudget;
  }
  const total = calculateElectronicsBudget(4, 2, 3);
  console.log(total);
}
/*
Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
*/
{
  const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
  ];
  function findAveragePhonePrice(phones) {
    let totalPrice = 0;
    for (const phone of phones) {
      totalPrice += phone.price;
    }
    const average = (totalPrice / phones.length).toFixed(2);
    return average;
  }
  const average = findAveragePhonePrice(phones);
  console.log(+average);
}

/*
Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
*/
{
  const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
  ];
  function totalSalary(employees) {
    let salary = 0;
    for (const employee of employees) {
      salary += employee.increment * employee.experience + employee.starting;
      // or
      // let increment = employee.increment * employee.experience;
      //   let currentSalary = increment + employee.starting;
      //   salary += currentSalary;
      console.log(salary);
    }
    return salary;
  }
  const total = totalSalary(employees);
  console.log(total);
}
