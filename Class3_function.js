function greeting(){
    console.log("Hello, World!");   

}
greeting();

function addNumbers(a, b){
    return a + b;
}
let result = addNumbers(5, 7);
console.log("The sum of 5 and 7 is:", result);
function greetingWithName(name = "Guest"){
    console.log("Hello, " + name + "!");
}
greetingWithName("Alice");
greetingWithName(); 

function bookTicket(destination, price,firstName){

    let ticktnum = Math.floor(Math.random() * 1000000); 
    console.log("Booking ticket to " + destination + " for " + firstName + ". The price is $" + price + ".");
    return ticktnum;    
    
}
function cancelTicket(ticketNumber){
    console.log("Cancelling ticket number: " + ticketNumber);
}   
let ticketNum = bookTicket("Paris", 250, "John");
cancelTicket(ticketNum);


function noOfPerGettingGift(...arges){
    console.log("Number of people getting gift:"+  arges);
}
noOfPerGettingGift("Alice", "Bob", "Charlie");
noOfPerGettingGift("David", "Eva");
noOfPerGettingGift("Frank");


