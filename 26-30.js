// MATH METHODS | JAVASCRIPT

// Q1. Write a program that takes a positive integer from
// user and displays:
// a. number
// b. round off value
// c. floor value
// d. ceil value


var num = +prompt("Enter a positive number:");

if (num > 0) {
    document.write("Number: " + num + "<br>");
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) + "<br>");
} else {
    document.write("Please enter a positive number.");
}

// Q2. Write a program that takes a negative floating point
// number from user and displays:
// a. number
// b. round off value
// c. floor value
// d. ceil value


var negativeNum = +prompt("Enter a negative floating point number:");

if (negativeNum < 0) {
    document.write("<br><br>");
    document.write("Number: " + negativeNum + "<br>");
    document.write("Round off value: " + Math.round(negativeNum) + "<br>");
    document.write("Floor value: " + Math.floor(negativeNum) + "<br>");
    document.write("Ceil value: " + Math.ceil(negativeNum) + "<br>");
} else {
    document.write("Please enter a negative number.");
}


// Q3. Write a program that displays the absolute value
// of a number.
// Example: absolute value of -4 is 4
// and absolute value of 5 is 5


var number = +prompt("Enter a number:");

document.write("<br><br>");
document.write("Number: " + number + "<br>");
document.write("Absolute value: " + Math.abs(number));


// Q4. Write a program that simulates a dice using
// random() method of JS Math class.
// Display the value of dice in your browser.


var dice = Math.floor(Math.random() * 6) + 1;

document.write("<br><br>");
document.write("Dice value: " + dice);



// Q5. Write a program that simulates a coin toss
// using random() method of JS Math class.
// Display the value of coin in your browser.


var coin = Math.floor(Math.random() * 2) + 1;

document.write("<br><br>");

if (coin === 0) {
    document.write("Coin Toss: Heads");
} else {
    document.write("Coin Toss: Tails");
}



// Q6. Write a program that shows a random number
// between 1 and 100 in your browser.


var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("<br><br>");
document.write("Random number between 1 and 100: " + randomNumber);



// Q7. Write a program that asks the user about his weight.
// Parse the user input and display his weight.
// Possible inputs:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var weight = prompt("Enter your weight:");

var parsedWeight = parseFloat(weight);

document.write("<br><br>");

if (!isNaN(parsedWeight)) {
    document.write("Your weight is: " + parsedWeight + " kg");
} else {
    document.write("Please enter a valid weight.");
}



// Q8. Write a program that stores a random secret number
// from 1 to 10 in a variable.
// Ask the user to input a number between 1 and 10.
// If user input equals the secret number,
// congratulate the user.


var secretNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = +prompt("Guess the secret number between 1 and 10:");

if (userNumber === secretNumber) {
    document.write("<br><br>");
    document.write("Congratulations! You guessed the correct number.");
} else {
    document.write("<br><br>");
    document.write("Sorry! The secret number was " + secretNumber);
}