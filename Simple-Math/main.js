// // Numbers in JavaScript

// // Ex. Write a program that asks the user for 2 numbers, then display the result of each arithmetic operation above. Your output should show the entire calculation. Note that you can use the "\n" special string character to start a new line in any string.

// // Input
// let num1 = prompt("Enter number 1"); // num1 will be a string
// num1 = parseInt(num1); // resaves it as a number

// let num2 = parseInt(prompt("Enter number 2")); // 2 steps in 1

// // Process
// var sum = num1 + num2;
// console.log(sum); // without parseInt:  "5" + "6" , or "56";

// var sumOutput = `${num1} + ${num2} = ${sum}`;
// console.log(sumOutput);

// var difference = num1 - num2;
// var diffOutput = `${num1} - ${num2} = ${difference}`;

// var product = num1 * num2;
// var prodOutput = `${num1} x ${num2} = ${product}`;

// var quotient = num1 / num2;
// var quotOutput = `${num1} / ${num2} = ${quotient}`;

// // Output
// var allOutput = `${sumOutput} \n ${diffOutput} \n ${prodOutput} \n ${quotOutput} `;
// alert(allOutput);

// // Ex. Write a program that asks the user for the base of an exponent. Then, display 5 exponents where the power is 1, 2, 3, 4, and 5.

// // Input
// var userNum = parseInt(prompt("Enter the exponent base:"));

// // Process
// var pwr1 = userNum ** 1;
// var pwr2 = userNum ** 2;
// var pwr3 = userNum ** 3;
// var pwr4 = userNum ** 4;
// var pwr5 = userNum ** 5;

// // Output
// alert(
//   `First 5 powers of ${userNum}: ${pwr1}, ${pwr2}, ${pwr3}, ${pwr4}, ${pwr5}`
// );

// // Ex. Ask the user for a numbers and display the remainder when you divide by 5.
// // Input
// let number = parseInt(prompt("Enter a number."));

// // Process
// let remainder = number % 5;

// // Output
// alert(`When you divide ${number} by 5, the remainder is ${remainder}.`);

// // Ex. Circle Example
// // input
// var radius = parseInt(prompt("Enter the radius of the circle"));

// // process
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius ** 2;

// // output
// alert(
//   `A circle with radius ${radius}:\nC = ${circumference.toFixed(
//     2
//   )}\nA = ${area.toFixed(2)}`
// );

// // Ex.  User Height  E.g. 66 inches >> 5 feet 6 inches
// // Input
// var heightTotalInches = parseInt(prompt("Enter your height in inches"));

// // Process
// var heightFeet = Math.floor(heightTotalInches / 12);
// console.log(heightFeet);

// // e.g. 66 % 12 = 6
// var heightInches = heightTotalInches % 12;
// console.log(heightInches);

// // Output
// alert(`${heightTotalInches} is ${heightFeet} ft ${heightInches} in`);

// // parseInt vs parseFloat vs the "+" operator

// // parseInt - turns a string intto an integet
// // parseFloat - turns string into a decimal
// // +operator deos both

// console.log(parseInt("6.5"));
// console.log(parseFloat(6.5));
// console.log(+"6.5");

// var width = parseFloat(prompt("Enter the width"));

// // There is no need to use parseInt or parseFloat on data that are already numbers:

// let x = 10;
// console.log(parseInt(x)); // This parseInt is not necessary
// console.log(x); // You can just log the value as x

// Math.pow(10, 3);
// console.log("xy");

// // input
// var length = parseFloat(prompt("Enter the length?")); // 3.5 >> 3
// var width = parseFloat(prompt("Enter the width?")); // float is a decimal number, int is an integer (whole number)

// // process
// // P = 2L + 2W
// var perimeter = 2 * length + 2 * width;

// // A= l*w
// var area = length * width;
// // output
// alert(`The perimeter is ${perimeter} and the area is ${area}`);

// input
var radius = parseFloat(prompt("Enter the radius"));
var height = parseFloat(prompt("Enter the height"));

// process
// V=  πr2h
var volume = π * radius * 2 * height;
// Surface area =  2πr(r + h)
var Surfacearea = 2 * π * radius(radius + height);

// output
alert(`The volume is ${volume} and the SA is ${Surfacearea}`);
