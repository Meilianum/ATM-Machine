import inquirer from "inquirer"

let myBalance =10000

let pinCode = 1234;
let pinAnswer = await inquirer.prompt([

   { name :"pin",
 message : "enter your pinCode",
 type :"number",
   }
  ]
);
if (pinAnswer.Pin === pinCode){
    console.log ("correct your pin code!!!");
}
 let operationAns = await inquirer.prompt(
    [
{
name : "operation",
message : " please select option",
type:"list",
choices: [" withdraw", "check balance"],

}
]
); 
console.log();

if (operationAns.operation === "withdraw")
{
 let amountAns = await inquirer.prompt(
    [
    {
        name : "amount",
    message : "enter your amount",
    type : "number",
   }
   ]
 )
 myBalance -=amountAns.amount;
console.log("your remaining balance is :"+ myBalance)
}
else if  ( operationAns.operation = "checkbalance"){
console.log("your balance is :" + myBalance)
}


else  {
    console.log("Incorrect pin number");
}