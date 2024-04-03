import inquirer from "inquirer";
//My Balance In Account 
let mybalance = 20500;
//My Password Of Atm Machine
let mypin = 12345;
//Code for My Atm MAchine Password
console.log("Welcome To Hamza Atm Machine");
let Password = await inquirer.prompt([{
        message: "Please Enter Your Password",
        type: "number",
        name: "pin"
    }]);
if (Password.pin === mypin) {
    console.log("Congrate! Your Password is Correct.");
    //Asking Question To User
    let Question = await inquirer.prompt([{
            message: "Select Any One To Perform Opeartion",
            type: "list",
            name: "askingquestion",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
        }]);
    //code for Withdraw
    if (Question.askingquestion === "Withdraw") {
        let Withdrawcash = await inquirer.prompt([{
                message: "Enter Amount PLease",
                type: "number",
                name: "amountfastcash"
            }]);
        if (Withdrawcash.amountfastcash > mybalance) {
            console.log("Insufficient Balance!!");
            console.log(`Your Current Balance is only:${mybalance}`);
        }
        else {
            mybalance -= Withdrawcash.amountfastcash;
            console.log(`Congrate Your Amount Is Sucessfully Withdraw.`);
            console.log(`Your Remaing Balance is ${mybalance} `);
        }
    }
    //code for Check Balance
    if (Question.askingquestion === "Check Balance") {
        console.log(`Your Current Balance is :${mybalance}`);
    }
    //code for Fast Cast
    if (Question.askingquestion === "Fast Cash") {
        let fastcash = await inquirer.prompt([{
                message: "Select any one option ",
                type: "list",
                name: "cashdraw",
                choices: ["5000", "1000", "1500", "20000"]
            }]);
        if (fastcash.cashdraw -= mybalance) {
            console.log(`Sucessfully Withdraw $$ `);
        }
    }
    //bracket of password
}
