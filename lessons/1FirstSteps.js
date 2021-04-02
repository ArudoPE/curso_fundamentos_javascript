//1st lesson -- Variables
//console.log, let you show something in the screen!
//We can declare a variable using var variableName;
//We can also declare and initialize a variable,
// var variableName = value;
var firstName = 'Aldo';
var lastName = 'Ortiz';
var age = 28;
console.log('Hi ' + firstName + ' ' + lastName);
console.log("I'm " + age);

//2nd Lesson - Variables (Strings)
//toUpperCase();, makes the string upper case
var nameInUppercase = firstName.toUpperCase();
//toLowerCasse(); makes the string lower case
var lastNameInLowerCase = lastName.toLowerCase();
//charAt(n); return a character of the string, "n" represents position.
var firstLetterOfName = firstName.charAt(0);
// How many letters have my string?
var lettersAmountOfName = firstName.length;
//Concatenation (strings), alt+96=``
var fullName = firstName + ' ' + lastName;
var fullName2 = `${firstName} ${lastName.toUpperCase()}`;
//.substr(index start, how many characters) returns a substring of a string
var subStr = firstName.substr(1, 2);
//challenge: last letter of your name!

//3rd Lesson: Variables (Numbers)
//sum
var myAge = 27;
myAge += 1; // result 28
//substraction
var myWeight = 75;
myWeight -= 2; // result 73
var sandwich = 1;
//variables sum
myWeight += sandwich; // result 74
var playSoccer = 3;
// variables substraction
myWeight -= playSoccer; // result 71
//Multiplication
var winePrice = 200.3;
//trick for decimal javascript error calculation
var totalPrice = Math.round(winePrice * 100 * 3) / 100;
//.toFixed(x); return a string from a number, with x decimals
var totalPriceStr = totalPrice.toFixed(3);
//.parseFloat(string); converts a string from a number
var totalPriceNumber = parseFloat(totalPriceStr);
//we can also do the multiplication like this
var a = 2;
a *= 3; // result 6
//Division
var pizzaAmount = 8;
var guests = 2;
var pizzaPerGuest = pizzaAmount / guests;
//we can also do the division like this
var b = 6;
b /= 3; // result 2
document.write('<p>Hola mundo cruel</p>');
document.write(`<p class="js-text">Hola mundo cruel number ${b}</p>`);

