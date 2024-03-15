# Working with Numbers in JavaScript

## Simple Math

Many of the operators you use in math class use the same symbol in JavaScript, while some require different syntax (symbols).

- \+ addition
- \- subtraction
- \* multiplication
- \\ division

Note: You can perform math on literals (direct values). E.g. let z = 1 + 7
Or you can perform them on variables.

E.g.
let x = 1, y = 7
let z = x + y

### Important!!

The prompt command always returns user data as a String. If you are asking for a numbers, you have to convert it using parseInt or the + operator.

E.g. let x = parseInt("21") // both methods convert "21" to the number 21.
E.g. let x = +"21"

Ex. Write a program that asks the user for 2 numbers, then display the result of each arithmetic operation above. Your output should show the entire calculation. Note that you can use the "\n" special string character to start a new line in any string.

## Exponents

Exponentiation is performed in JavaScript using the operator \*\*.

Ex. Write a program that asks the user for the base of an exponent. Then, display 5 exponents where the power is 1, 2, 3, 4, and 5.

## Modulus (remainder)

The modulus operator, %, displays the remainder from a division. E.g. 10 % 3 = 1, since 3 goes into 10 3 full times, with 1 left over.

Ex. Ask the user for a numbers and display the remainder when you divide by 5.

## Math Library

A library is a collection of functions you can use in your code. The Math library contains many Math-related constants and functions:

- Math.round(x) rounds x using normal rounding.
- Math.floor(x) always rounds x up.
- Math.ceil(x) always rounds x down.
- Math.random() gives a random decimal from 0 to 1.
- Math.sqrt(x) finds the square root of x.
- Math.PI gives an exact value for pi.
- ... and many more. See the Math javascript documentation for a complete list.

- x.toFixed(n) gives x rounded to n decimals. Ex. 5.1299.toFixed(2) >> 5.13
- Note: toFixed does NOT have the word Math written in front.

Ex. Ask the user for the radius of a circle, then output the circumference and area of that circle, rounded to 2 decimal places. C = 2\*pi\*r and A = pi\*r^2

Ex. Ask the user for their height in total inches. Then, tell them their height in feet and remaining inches. There are 12 inches in 1 foot.

<!- -->
