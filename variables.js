var age = "two";
console.log("Type of age is:"+ typeof age);
age = 36;
console.log("Type of age after reassignment is:"+ typeof age);


function printAge(){
    let age = "38";
    let isBirthday = true;
    if(isBirthday){
        age = Number(age);
        console.log("Type of age after conversion inside if block is:"+ typeof age);
        age = age + 1;
        console.log("Type of age inside if block is:"+ age);
    }
    console.log("Type of age inside function is:"+ age);
}
let height = "5.9";
console.log("Type of height is:"+ typeof height);   
height = "five";
console.log("Type of height after reassignment is:"+ typeof height);
console.log("Type of age outside function is:"+ age);
printAge();


