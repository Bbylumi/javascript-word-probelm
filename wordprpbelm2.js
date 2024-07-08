Write a function that converts hours into seconds.

Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400

function seconds(hours){
    return hours * 60 * 60
}
console.log(seconds(2));
console.log(seconds(10));
console.log(seconds(24));

There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9


function remainder (a, b){
    return a % b;
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));


Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true


function lessThanOrEqualToZero(num){
    return num <=0;
}

console.log(num(5));
console.log(num(0));
console.log(num(-2));


Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true

function numberLessThan100 ( num1, num2){
    return (num1 + num2)
}

console.log(numberLessThan100(22, 15));
console.log(numberLessThan100(83, 34));
console.log(numberLessThan100(3, 77))

In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples
animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50

function animals (chickens, cows, pigs){
    let totalanimalLegs =(chicken * 2)+(cows * 4) + (pigs * 4)
    return totalanimalLegs;
}

console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
