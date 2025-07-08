//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”.

var city = prompt("Enter your city name:");

// Check karna agar city Karachi ho
if (city.toLowerCase() === "karachi") {
  alert("Welcome to city of lights");
} else {
  alert("Welcome to " + city);
}
//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender (male/female):");
gender = gender.toLowerCase();

if (gender === "male") {
  alert("Good Morning Sir.");
} else if (gender === "female") {
  alert("Good Morning Ma’am.");
} else {
  alert("Invalid input. Please enter 'male' or 'female'.");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var signalColor = prompt("Enter the color of the traffic signal (red, yellow, green):").toLowerCase();

// Message show karna input ke mutabiq
if (signalColor === "red") {
  alert("Must Stop");
} else if (signalColor === "yellow") {
  alert("Ready to Move");
} else if (signalColor === "green") {
  alert("Move Now");
} else {
  alert("Invalid color entered. Please enter red, yellow, or green.");
}


/*4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”*/

var fuel = parseFloat(prompt("Enter remaining fuel in your car (in litres):"));

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("You have enough fuel in your car.");
}
/* 5. Run this script, & check whether alert message would be
 displayed or not. Record the outputs.*/

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

/*6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:*/

var marksOne = parseInt(prompt("enter marks for first subject : "));

var marksTwo = parseInt(prompt("enter marks for second subject : "));

var marksThree = parseInt(prompt("enter marks for third subject : "));

var totalMarks = 300;
var obtainedMarks = marksOne + marksTwo + marksThree;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<h3>Mark Sheet</h3>");
document.write("<p>Total Marks :", totalMarks, "</p>");
document.write("<p>Marks Obtained : ", obtainedMarks, " </p>");
document.write("<p>Percentage  : ", percentage, " %</p>");
if (percentage >= 80) {
  document.write("<p>Grade : A-One </p>");
  document.write("<p>Remarks : Excellent </p>");
} else if (percentage >= 70) {
  document.write("<p>Grade : A </p>");
  document.write("<p>Remarks : Good </p>");
} else if (percentage >= 60) {
  document.write("<p>Grade : B </p>");
  document.write("<p>Remarks : You Need To Improve </p>");
} else if (percentage < 60) {
  document.write("<p>Grade : Fail </p>");
  document.write("<p>Remarks : Sorry </p>");
}

/*7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.a. If user guesses the same number, show “Bingo! Correct answer”.
b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.*/

var secretNumber = 5;
var userGuess = parseInt(prompt("Guess the secret number between (1-10) : "));
if (userGuess == secretNumber) {
  alert("Bingo! Correct Asnwer. ");
} else if (userGuess == secretNumber + 1) {
  alert("Close enough to the correct answer");
}
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var divisible = parseInt(prompt("Enter a number divisible by 3 : "));
if (divisible % 3 == 0) {
  alert("Number is divisible by 3 ");
} else {
  alert("Not divisible by 3");
}
/* 9. Write a program that checks whether the given input is an
 even number or an odd number.*/

var userInput = parseInt(prompt("Enter a number to check if it's odd or even :"));
if (userInput % 2 == 0) {
  alert("Number is EVEN !");
} else {
  alert("Number is ODD");
}

/* 10. Write a program that takes temperature as input and
 shows a message based on following criteria
 a. T > 40 then “It is too hot outside.”
 b. T > 30 then “The Weather today is Normal.”
 c. T > 20 then “Today’s Weather is cool.”
 d. T > 10 then “OMG! Today’s weather is so Cool.”*/

var T = parseInt(prompt("Enter current temperature : "));
if (T >= 40) {
  alert("It is too hot outside");
} else if (T <= 30 && T >= 28) {
  alert("The weather today is normal ");
} else if (T >= 20) {
  alert("Today's weather is cool");
} else if (T > 10) {
  alert("OMG Today’s weather is so Cool.");
}

/* 11. Write a program to create a calculator for +,-,*, / & %
 using if statements. Take the following input:
 a. First number
 b. Second number
 c. Operation (+, -, *, /, %)
 Compute & show the calculated result to user.*/

var firstNumber = parseInt(prompt("Enter First Number : "));
var secondNumber = parseInt(prompt("Enter Second Number : "));
var operator = prompt("Enter the operator (+  -  *  /  % ) : ");
var result;
if (operator == "+") {
  result = firstNumber + secondNumber;
  alert(result);
} else if (operator == "-") {
  result = firstNumber - secondNumber;
  alert(result);
} else if (operator == "*") {
  result = firstNumber * secondNumber;
  alert(result);
} else if (operator == "/") {
  result = firstNumber / secondNumber;
  alert(result);
} else if (operator == "%") {
  result = firstNumber5secondNumber;
  alert(result);
}