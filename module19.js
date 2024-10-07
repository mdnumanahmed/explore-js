/* ====================================
                OBJECT
=======================================*/

{
  // Task-1 : Access the golden rod color value in output.
  const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": "#daa520",
  };
  console.log(colors["golden rod"]);
}

{
  // Task-2:  For this object below add a property named passenger capacity with value 5
  const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  };
  car["passenger capacity"] = 5;
  console.log(car);
}

{
  // Task-3:  Display the physics marks as output.
  const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
      subject: "HSC Physics",
      author: "Shahjahan Tapan",
      marks: 30,
    },
  };
  console.log(student.physics.marks);
}

{
  // Task-4: Count the number of properties.
  let student = {
    name: "Ariana Grande",
    age: 21,
    city: "Gaibandha",
    isStudent: true,
  };
  console.log(Object.keys(student).length);
}

{
  // Task-5 (Hard) Loop through an object and print the key-value pairs with their types
  // Input:

  let myObject = {
    name: "John Doe",
    age: 25,
    city: "Example City",
    isStudent: true,
  };
  for (let key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    console.log(typeof myObject[key]);
    let result = "key: " + key + " | " + "type: " + typeof myObject[key];
    console.log(result);
  }

  /* Output:

key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean */
}

/* ====================================
               STRING
=======================================*/

/* 
Task-1:
Count how many times a string has the letter a
 */
{
  const sentence = "Count how many times a string has the letter a";
  let count = 0;
  for (let letter of sentence) {
    console.log(letter);
    if (letter === "a") {
      count++;
    }
  }
  console.log(count);
}
/* 
Task-2:
Count how many times a string has the letter a or A
 */
{
  const letters = "Count how many times a string has the letter a or A";
  let count = 0;
  for (let letter of letters) {
    if (letter.toLowerCase() === "a") {
      count++;
    }
  }
  console.log(count);
}
/* 
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
 */
{
  const vowels = "a" && "e" && "i" && "o" && "u";
  const sentence =
    "Check whether a string contains all the vowels a, e, i, o, u";
  for (let letter of sentence) {
    if (sentence.includes(vowels)) {
      console.log("All vowels available");
    } else {
      console.log("Not available");
    }
  }
}
/* 
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
 */
{
  // First Approach without loop
  let sentence = "if exists the max value, find how maX";
  let changed = sentence.replace(/x/g, "y").replace(/X/g, "Y");
  console.log(changed);

  // Second Approach using for loop
  let mod;
  for (let letter of sentence) {
    if (letter === "x" || "X") {
      mod = sentence.replace(/x/g, "y").replace(/X/g, "Y");
      console.log(mod);
    }
    console.log(mod);
  }
}
/* 
Task-5:
Capitalize Every first Letter of each word in a String
 */
{
  let sentence = "Capitalize Every first Letter of each word in a String";
  let words = sentence.split(" ");
  let capitalize = [];
  for (let word of words) {
    let cap = word.charAt(0).toUpperCase() + word.slice(1);
    capitalize.push(cap);
    console.log(cap);
  }
  let capt = capitalize.join(" ");
  console.log(capt);
}
