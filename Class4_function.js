function calculator(a, b, operation) {
    return operation(a, b);
} 
let addition = (x, y) => x + y;
let subtraction = (x, y) => x - y;
let multiplication = (x, y) => x * y;
let division = (x, y) => x / y; 
let num1 = 20;
let num2 = 10;
console.log("Addition of num1 and num2 is:", calculator(num1, num2, addition));
console.log("Subtraction of num1 and num2 is:", calculator(num1, num2, subtraction));
console.log("Multiplication of num1 and num2 is:", calculator(num1, num2, multiplication));
console.log("Division of num1 and num2 is:", calculator(num1, num2, division));


