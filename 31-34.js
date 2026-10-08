// ----DATE METHODS | JAVASCRIPT----
// 1. Write a program that displays current date and time in
// your browser.

var today = new Date()
console.log(today)
// 2. Write a program that alerts the current month in words.
// For example December.

var months = [
  "January", "February", "March", "April", 
  "May", "June", "July", "August", 
  "September", "October", "November", "December"
];
var currentDate = new Date();
var currentMonthIndex = currentDate.getMonth();
console.log("Current month: " + months[currentMonthIndex]);

// Or using alert as requested by your assignment:

// alert("Current month: " + months[currentMonthIndex]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

var today = new Date();

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(days[today.getDay()]);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var today = new Date();

var day = today.getDay();

var message = ["It's Fun day", "It's Fun day", "It's not Fun day", "It's not Fun day", "It's not Fun day", "It's not Fun day", "It's Fun day"];

console.log(message[day]);


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var today = new Date();

var date = today.getDate();

var result = ["Last days of the month", "First fifteen days of the month"];

console.log(result[date < 16 ? 1 : 0]);


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var today = new Date();

var milliSeconds = today.getTime();

var minutes = milliSeconds / 1000 / 60;

console.log(minutes);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var today = new Date();

var hours = today.getHours();

var time = ["It's PM", "It's AM"];

console.log(time[hours < 12 ? 1 : 0]);


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date(2020, 11, 31);

console.log(laterDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramadan = new Date("June 18, 2015");

var today = new Date();

var difference = today.getTime() - ramadan.getTime();

var days = difference / 1000 / 60 / 60 / 24;

console.log(Math.floor(days));


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and
// the beginning of 2015.

var referenceDate = new Date("January 1, 1970");

var date2015 = new Date("January 1, 2015");

var difference = date2015.getTime() - referenceDate.getTime();

var seconds = difference / 1000;

console.log(seconds);


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var today = new Date();

var hours = today.getHours();

today.setHours(hours + 1);

console.log(today);


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back.

var today = new Date();

var year = today.getFullYear();

today.setFullYear(year - 100);

console.log(today);


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var age = prompt("Enter your age:");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

console.log(birthYear);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 decimal places.
// Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

var customerName = prompt("Enter Customer Name:");

var currentMonth = prompt("Enter Current Month:");

var units = prompt("Enter Number of Units:");

var chargesPerUnit = prompt("Enter Charges per Unit:");

var netAmount = units * chargesPerUnit;

var latePayment = 500;

var grossAmount = netAmount + latePayment;

console.log("Customer Name: " + customerName);
console.log("Current Month: " + currentMonth);
console.log("Number of Units: " + units);
console.log("Charges per Unit: " + chargesPerUnit);
console.log("Net Amount Payable: " + netAmount.toFixed(2));
console.log("Late Payment Surcharge: " + latePayment.toFixed(2));
console.log("Gross Amount Payable: " + grossAmount.toFixed(2));