//Emma is organizing a small library system for her local community center.
//She needs a JavaScript program to manage the books and track the borrowing status of
//each book. Each book has a title, author, and a unique ID. The library needs to be able to:

//Add new books to the collection.
//Borrow a book using its ID.
//Return a borrowed book using its ID.
//List all books with their current status (borrowed or available).
//Help Emma by writing the necessary JavaScript code to achieve these tasks.

//Create a function that takes voltage and current and returns the calculated power.

//Examples
//circuitPower(230, 10) ➞ 2300

//circuitPower(110, 3) ➞ 330

//circuitPower(480, 20) ➞ 9600

function circuitPower(voltage, current) {
  //formula for power P = v * 1
  var power = voltage * current;
  return power;
}

console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3));
console.log(circuitPower(480, 20));

//Write a function that returns the string "something" joined with a space " " and the given argument a.

//Examples
//giveMeSomething("is better than nothing") ➞ "something is better than nothing"

//giveMeSomething("Bob Jane") ➞ "something Bob Jane"

//giveMeSomething("something") ➞ "something something"
//Notes Assume an input is given.

function giveMeSomething(a) {
  return "something " + a;
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

//Write a JavaScript function that gets the current date and displays it in the format "MM/DD/YYYY".

function getCurrentFormattedDate() {
   
  let today = new Date();

   
  let month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
  let day = today.getDate().toString().padStart(2, '0');
  let year = today.getFullYear();

   
  let formattedDate = `${month}/${day}/${year}`;

   
  console.log("Today's date is: " + formattedDate);
}

 
getCurrentFormattedDate();
