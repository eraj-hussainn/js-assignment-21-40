
// Question 1: Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "!");
document.write("<h3>Hello, " + fullName + "!</h3><br>");


// Question 2: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var favPhone = prompt("Enter your favorite mobile phone model:");

var phoneLength = favPhone.length;

document.write("My favorite phone is: " + favPhone + "<br>");
document.write("Length of string: " + phoneLength + "<br><br>");


// Question 3: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var str = "Pakistani";

var indexN = str.indexOf("n");

document.write("String: " + str + "<br>");
document.write("Index of 'n': " + indexN);


// Question 4: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var str4 = "Hello World";
var lastIndexL = str4.lastIndexOf("l");

document.write("String: " + str4 + "<br>");
document.write("Last index of 'l': " + lastIndexL + "<br><br>");



// Question 5: Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var str5 = "Pakistani";
var charAt3 = str5.charAt(3);

document.write("String: " + str5 + "<br>");
document.write("Character at index 3: " + charAt3 + "<br><br>");



// Question 6: Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "!");
document.write("<h3>Hello, " + fullName + "!</h3>");


// Question 7: Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var replacedCity = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement: " + replacedCity + "<br><br>");



// Question 8: Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
// Using global flag (/g) in replace to change all occurrences
var updatedMessage = message.replace(/and/g, "&");

document.write("Original: " + message + "<br>");
document.write("Updated: " + updatedMessage + "<br><br>");



// Question 9: Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var strVal = "472";
var numVal = Number(strVal);

document.write("Value: " + strVal + "<br>");
document.write("Type: " + typeof strVal + "<br>");
document.write("Value: " + numVal + "<br>");
document.write("Type: " + typeof numVal);


// Question 10: Write a program that takes user input. Convert and show the input in capital letters.

var userInput10 = prompt("Enter text for Question 10:");
var upperCaseInput = userInput10.toUpperCase();

document.write("User input: " + userInput10 + "<br>");
document.write("Upper case: " + upperCaseInput + "<br><br>");


// Question 11: Write a program that takes user input. Convert and show the input in title case.

var userInput11 = prompt("Enter text for Question 11:");
// Converting to title case (first letter capital, rest lowercase)
var titleCaseInput = userInput11.charAt(0).toUpperCase() + userInput11.slice(1).toLowerCase();

document.write("User input: " + userInput11 + "<br>");
document.write("Title case: " + titleCaseInput + "<br><br>");



// Question 12: Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

var num = 35.36;
// Convert number to string and replace the dot with an empty string
var strNum = num.toString().replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + strNum);


// Question 13: Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ , . !], prompt the user to enter a valid username. For character codes of [@ . !]. Note: ASCII code of ! is 33, ASCII code of , is 44, ASCII code of . is 46, ASCII code of @ is 64

var username;
var isValid = false;

for (; !isValid;) {

    username = prompt("Enter your username:");
    isValid = true;

    for (var i = 0; i < username.length; i++) {

        var charCode = username.charCodeAt(i);

        if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        alert("Invalid username! @, ., , and ! are not allowed.");
    }
}

alert("Valid username: " + username);

document.write("Username: " + username + "<br><br>");


// Question 14: You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or cooKIE, program should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");
var lowerInput = userInput.toLowerCase();
var found = false;
var index = -1;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === lowerInput) {
        found = true;
        index = i;
        break;
    }
}

if (found) {
    alert(userInput + " is available at index " + index + " in our bakery.");
    document.write(userInput + " is **available** at index " + index + " in our bakery.");
} else {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
    document.write("We are sorry. " + userInput + " is **not available** in our bakery.");
}

// Question 15: Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
var password = prompt("Enter your password:");

function isValidPassword(pwd) {
    // Check if length is at least 6 characters
    if (pwd.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    
    // Check if it starts with a number (ASCII 48 to 57 are '0'-'9')
    var firstChar = pwd.charCodeAt(0);
    if (firstChar >= 48 && firstChar <= 57) {
        alert("Password can not begin with a number.");
        return false;
    }
    
    var hasAlphabet = false;
    var hasNumber = false;
    
    for (var i = 0; i < pwd.length; i++) {
        var code = pwd.charCodeAt(i);
        // Check for alphabets (A-Z: 65-90, a-z: 97-122)
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            hasAlphabet = true;
        }
        // Check for numbers (0-9: 48-57)
        if (code >= 48 && code <= 57) {
            hasNumber = true;
        }
    }
    
    if (!hasAlphabet || !hasNumber) {
        alert("Password must contain both alphabets and numbers.");
        return false;
    }
    
    return true;
}

while (!isValidPassword(password)) {
    password = prompt("Please enter a valid password:");
}

document.write("Entered password: " + password + "<br>");
document.write("Password is valid!<br><br>");


// Question 16: Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
var university = "University of Karachi";
var uniArray = university.split(""); // Splits the string into individual characters

for (var i = 0; i < uniArray.length; i++) {
    document.write(uniArray[i] + "<br>");
}

// Question 18: You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var text = "The quick brown fox jumps over the lazy dog";

// Convert the text to lowercase to perform a case-insensitive search
var lowerText = text.toLowerCase();

// Split the string into an array of words
var words = lowerText.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");