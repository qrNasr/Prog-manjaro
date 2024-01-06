console.log("This is Js");
// This is a single-line comment in JavaScript

// string methods in javascript
let str = "Hello World";
console.log(str); // Output: Hello World
let upperStr = str.toUpperCase();
console.log(upperStr); // Output: HELLO WORLD
let lowerStr = str.toLowerCase();
console.log(lowerStr); // Output: hello world
let indexOfSpace = str.indexOf(' ');
console.log(indexOfSpace); // Output: 5 (The space character's position)
let substr = str.substring(6, 10);
console.log(substr); // Output: World
console.log(str.endsWith('z'));
/* The endsWith() method determines whether a string ends with the characters of a specified string.
It returns true if the string ends with the specified text, otherwise it returns false. */

// array methods in javascript
let arr = [1, 2, 3, 4];
console.log(arr[0]); // Accessing an element using its index
console.log(arr.length); // Getting the length of an Array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Using for loop to iterate through each element of an
    // array and printing them
    }
    let newArr = arr.push(5);
    /* The push() method appends new items to an array, and returns the new length of
    * the array.*/
   console.log(newArr); // Output: 5
   let removeItem = arr.shift();
   console.log(removeItem); // Removes the first item from an array and returns
   // removed item
   console.log(arr); // Output: [2, 3, 4,
   
   let joinArray = arr.join(',');
   console.log(joinArray); // Joins all elements of an array into a string separated
   // by commas
   
let charAt = str.charAt(7);
console.log(charAt); // Output: l
let concat = "I am" + " " + "a" + " " + "JavaScript Developer.";
console.log(concat); // Output: I am a JavaS</s>ript Develop
/*

// Arithmetic Operators in Javascript
let num1 = 2;
let num2 = 4;
console.log(num1 + num2); // Output: 6
console.log(num1 - num2); // Output: -2
console.log(num1 * num2); // Output: 8
console.log(num1 / num2); // Output: 0.5
console.log(num1 % num2); // Output: 2
// Comparison operators in Javascript
if (num1 > num2) {
    console.log("Num1 is greater than Num2");
} else if (num1 < num2) {
    console.log("Num1 is lesser than Num2");
} else {
    console.log("Both are equal");
}
// Logical operators in Javascript
let x = true;
let y = false;
if (x && y) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}
// // Bitwise operators in Javascript
// let a=7;
// let b=3;
// console.log(a&b); // Output: 1 (Binary AND operation)
// console.log(a|b); // Output: 7 (Binary OR operation)

// console.log("What's your name?"); // Asking the user for their name
// var name = prompt("Please enter your name: "); // Storing the users input into the variable
// alert("Hello, " + name + ". Welcome to my website!"); // Displaying a greeting
// // with the users name included

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// let randomNumber1 = getRandomInt(0, 5);
// let randomNumber2 = getRandomInt(6, 10);
// document.write("<h3>The two random numbers are: " + randomNumber
//     + "</h3><br>");
// if (randomNumber1 > randomNumber2) {
//     document.write("<p>The first number is greater than the second.</p>")
// } else if (randomNumber1 < randomNumber2) {
//     document.write("<p>The second number is greater than the first.</p>")
// } else {
//     document.write("<p>Both numbers are equal!</p>")
// }
// document.getElementById('number1').innerHTML = randomNumber1;
// document.getElementById('number2').innerHTML = randomNumber2;
// document.querySelector('#btn').addEventListener('click', function () {
//     var num1 = parseFloat(document.getElementById('num1').value);
//     var num2 = parseFloat(document.getElementById('num2').value);
//     if (!isNaN(num1) && !isNaN(num2)) {
//         document.getElementById('result').innerHTML = 'Result:' + addNumbers(num1, num
//                             2)
//     } else {console.log("What's your name?"); // Asking the user for their name
// var name = prompt("Please enter your name: "); // Storing the users input into the variable
// alert("Hello, " + name + ". Welcome to my website!"); // Displaying a greeting
// // with the users name included

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// let randomNumber1 = getRandomInt(0, 5);
// let randomNumber2 = getRandomInt(6, 10);
// document.write("<h3>The two random numbers are: " + randomNumber
//     + "</h3><br>");
// if (randomNumber1 > randomNumber2) {
//     document.write("<p>The first number is greater than the second.</p>")
// } else if (randomNumber1 < randomNumber2) {
//     document.write("<p>The second number is greater than the first.</p>")
// } else {
//     document.write("<p>Both numbers are equal!</p>")
// }
//         alert('please insert valid numbers')
//     }
// })
// function addNumbers(n1, n2) { return n1 + n2; }

*/

// number methods in javascript
let num = 23;
console.log(num);
let toStringNum = num.toString();
console.log(toStringNum); // Converts Number to String
let charAtNum = toStringNum.charAt(2);
console.log(charAtNum); // Returns the character at a specific index in a string
let concatNum = num + 45;
console.log(concatNum); // Concatenates two numbers
let floorDivision = Math.floor(num / 7);
console.log(floorDivision); // Performs a floor division, which rounds down the
// result of a division to the nearest integer less than or equal to that value
let modulus = num % 7;
console.log(modulus); // Finds the remainder of a division, i.e.,
// the value remaining when one number is divided by another