const promiseAsynCode= new Promise((resolve, reject) => {
    setTimeout(() => {
        //const success = false; // Change this to false to test rejection 
        //if (success) {
            resolve("Asynchronous operation completed successfully!");
        //} else {
            reject("Asynchronous operation failed.");
        //}       
    }, 2000);
});
promiseAsynCode.then((message) => {
    console.log("Promise Resolved:", message);
}).catch((error) => {
    console.log("Promise Rejected:", error);
});


function tossCoin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random()*2;
            console.log(randomNum);
           let randomNum2 = Math.floor(randomNum);
            console
            
            if (randomNum2 == 1) {
                resolve("Heads");
            } else {
                reject("Tails");
            }
        }, 1000);
    });     

}   
tossCoin().then((result) => {
    console.log("Coin Toss Result:", result);
}).catch((error) => {
    console.log("Error:", error);
});
