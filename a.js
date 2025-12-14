let x = 10;
let y = 20; 
let sum = x + y;
console.log("The sum of x and y is:", sum);



let age = "25";
console.log("Type of Age is:"+ typeof age);
let ageInNumber = Number(age);
console.log("Type of Age after conversion is:"+ typeof ageInNumber);

let height = "25.7";
console.log("Type of height is:"+ typeof height);
let heightInNumber = Number(height);

console.log("Type of heightInNumber after conversion is:"+ typeof  heightInNumber);


let isMarried = "false";
console.log("Type of isMarried is:"+ typeof isMarried);
let isMarriedBoolean = Boolean(isMarried);
console.log("Type of isMarriedBoolean after conversion is:"+ typeof isMarriedBoolean );

let a= 30;
console.log("A value: " + a);   
a = "thirty";
console.log("A value after reassignment: " + a);

function greet(name) {
    return `Hello, ${name}!`;
}       
console.log(greet("Alice"));
console.log(greet("Bob"));
console.log(greet("Suki"));
console.log(greet("Siva"));
