/**
 * Problem-01 : Help The Zoo Manager
 */
{
  function calculateMoney(quantity) {
    console.log(typeof quantity);
    if (typeof quantity === "undefined") {
      return "You should input any number";
    } else if (typeof quantity !== "number") {
      return "Please provide only number";
    } else if (quantity < 0) {
      return "Please provide positive number";
    }
    const ticketPrice = 120;
    const income = quantity * ticketPrice;

    const gaurdBill = 500;
    const lunchBill8Person = 50 * 8;
    const spend = gaurdBill + lunchBill8Person;

    const remainingMoney = income - spend;
    return remainingMoney;
  }
  const result = calculateMoney(1055);
  console.log(result);
}

/*
 Problem-02: Good Name , Bad Name
 */
{
  function checkName(name) {
    if (typeof name !== "string") {
      return "Invalid";
    }
    const checkedLetter = "a, y, i , e , o , u, w";
    let lastLetter = "";
    for (const letter of name) {
      let lastIndex = name.length - 1;
      lastLetter = name[lastIndex];
    }
    if (checkedLetter.includes(lastLetter.toLowerCase())) {
      return "Good Name";
    }
    return "Bad Name";
  }
  const check = checkName();
  console.log(check);
}

/* 
Problem 03 : Virus in my Array
*/
{
  const array = { num: [1, 2, 3] };
  function deleteInvalids(arr) {
    if (Array.isArray(arr) === false) {
      return "Please provide only array";
    }
    let numberArr = [];
    for (const item of arr) {
      if (typeof item === "number" && !isNaN(item)) {
        numberArr.push(item);
      }
    }
    return numberArr;
  }
  const result = deleteInvalids(array);
  console.log(result);
}

/* 
Problem 04 : Make A Great Password
*/
{
  const person = { name: "toky", birthYear: 2000, siteName: "googe" };
  function password(person) {
    console.log("siteName" in person);
    if (!"name" in person || !"birthYear" in person || !"siteName" in person) {
      return "Property missing";
    } else if (person.birthYear.toString().length < 4) {
      return "Invalid";
    }
    const website =
      person.siteName.charAt(0).toUpperCase() + person.siteName.substring(1);
    const pass = website + "#" + person.name + "@" + person.birthYear;
    return pass;
  }
  const pass = password(person);
  console.log(pass);
}

/* 
Problem 05 : Monthly Savings of a Freelancer
*/

{
  const payments = [900, 2700, 3400];
  function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments)) {
      return "Please provide an array in first parameter";
    } else if (typeof livingCost !== "number") {
      return "Please enter only number";
    }
    let income = 0;
    let taxs = 0;
    for (const payment of payments) {
      income += payment;
      if (payment >= 3000) {
        taxs += payment * 0.2;
      }
    }
    const savings = income - (taxs + livingCost);
    if (savings < 0) {
      return "earn more";
    }
    return savings;
  }
  const savings = monthlySavings(payments, 10000);
  console.log(savings);
}
