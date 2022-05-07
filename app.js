let promptsync = require('prompt-sync');
let prompt = promptsync();

let password = 1234;
let bal = 0;
let wallet = 0;
let wallet2 = 0;
var x = true;

let askpass = parseInt(prompt("Enter password: "));

if (askpass == password) {
    while (x) {
        console.log("");
        console.log("1. Add money to account");
        console.log("2. Check account balance");
        console.log("3. Wallet balance");
        console.log("4. Withdraw");
        console.log("5. Deposit");
        console.log("6. Quit");
        console.log("");
        let answer = parseInt(prompt("Enter choice: "));
    
        switch(answer)
        {
            case 1:
                let addMoney = parseInt(prompt("How much money do you need?: "));
                var added = bal + addMoney;
                console.log( "Added " + added + "€" + " to your account");
                break;
    
            case 2:
                console.log("You have " + added + "€" + " in your account");
                break;
    
            case 3:
                console.log("You have " + wallet + "€" + " in your wallet");
                break;
    
            case 4:
                wallet = added;
                console.log("Withdraw succesful");
                break;
            
            case 5:
                added = wallet;
                console.log("Deposit succesful");
                break;
    
            case 6:
                console.log("Quitting...");
                break;
         
            default:
                console.log("Try again");
        }
        if (answer == 6) {
            x = false;
        }
        if (answer == 4) {
            added = 0;
        }
        if (answer == 5) {
            wallet = 0;
        }
    }   
} else {
    console.log("Wrong password");
}


