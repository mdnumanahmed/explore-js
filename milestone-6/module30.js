// Problem One
{
  const multiply = (num1, num2, num3) => num1 * num2 * num3;
  console.log(multiply(2, 3, 4));
}
{
  const add = (num1, num2 = 10) => num1 + num2;
}

// Problem Two
{
  const friends = [
    "Monsur",
    "Jamil",
    "Rafi",
    "Goni",
    "Kutub",
    "Juned",
    "Nazrul",
  ];
  const findEvenLengthFriends = (friends) => {
    let evenLengthFriends = [];
    for (const friend of friends) {
      if (friend.length % 2 !== 1) {
        evenLengthFriends.push(friend);
      }
    }
    return evenLengthFriends;
  };
  const result = findEvenLengthFriends(friends);
  console.log(result);
}

// Problem Three
{
  const numbers = [2, 3, 4, 5, 6];
  const squareIt = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
      sum += number * number;
    }
    const average = sum / numbers.length;
    return average;
  };
  const result = squareIt(numbers);
  console.log(result);
}
