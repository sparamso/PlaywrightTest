let firstName = "John"; 
let lastName = "Doe";

let country = "USA";
let city = "New York";  
let age = 30;
let isMarried = false;
let currentYear = 2024;
let birthYear = currentYear - age;      

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Country:", country);           
console.log("City:", city);
console.log("Age:", age);
console.log("Is Married:", isMarried);
console.log("Current Year:", currentYear);
console.log("Birth Year:", birthYear);
console.log("Type of firstName is:"+ typeof firstName);
console.log("Type of age is:"+ typeof age);
console.log("Type of isMarried is:"+ typeof isMarried);
console.log("Type of birthYear is:"+ typeof birthYear); 

let num1 = 5;   
let num2 = '5';
console.log("Is num1 equal to num2 (==)?", num1 == num2);
console.log("Is num1 strictly equal to num2 (===)?", num1 === num2);

let num3 = '9.8';
if (parseInt(num3) == 10) {
    console.log("The value after parsing num3 is equal to 10");
} else {
    console.log("The value after parsing num3 is not equal to 10");
}

let num4 = 4;   
let num5 = 3;
console.log("Is num4 greater than num5?", num4 > num5);
console.log("Is num4 less than num5?", num4 < num5);
console.log("Is num4 greater than or equal to num5?", num4 >= num5);
console.log("Is num4 less than or equal to num5?", num4 <= num5);   

if (num4 > num5) {
    console.log("num4 is greater than num5");
} else if (num4 < num5) {
    console.log("num4 is less than num5");
}   else if (num4 >= num5) {
    console.log("num4 is greater than or equal to num5");
} else if (num4 <= num5) {
    console.log("num4 is less than or equal to num5");
}
if (num4 == num4) {
    console.log("num4 is equal to num4");
}  

if (num4 === num4) {   
    console.log("num4 is strictly equal to num4");
} 
if (num4 !== num4) {
    console.log("num4 is not strictly equal to num4");
} 

if(4 != '4') {
    console.log("4 is not equal to '4'");
}   
if(4 !== '4') {
    console.log("4 is not strictly equal to '4'");
}   
if(4 == '4') {
    console.log("4 is equal to '4'");
}   
if(4 === '4') {
    console.log("4 is strictly equal to '4'");
}


if(4 > 3 && 10 < 12) {
    console.log("Both conditions are true");
}   

if  (4 > 3 && 10 > 12) {   

    console.log("Both conditions are true");
}   
if (4 > 3 || 10 < 12) {
    console.log("At least one of the conditions is true");
}   
if( 4 > 3 || 10 > 12 ) {
    console.log("At least one of the conditions is true");
}
if(!(4 > 3)) {
    console.log("The condition is false");
}
if(!(false)) {
    console.log("The condition is true");
}   

if(!(4 > 3 && 10 < 12)) {
    console.log("The negation of the condition is true");
}   
if(!(4 === '4')) {
    console.log("The negation of the strict equality is true");
}   
if(!(4 > 3 && 10 > 12)) {
    console.log("The negation of the condition is true");
}


