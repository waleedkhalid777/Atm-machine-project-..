import inquirer from "inquirer";

interface anaType {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number,

}

const answer = await inquirer.prompt([

   {
     type: "input",
     name: "userId",
     message: "kindly enter your  Id"


   },
   {
     type: "number",
     name: "userPin",
     message: "kindly enter your pin"
   },
   {
     type:"list",
     name: "accountType",
     choices: [ "current", "saving"],
     message: "select your account type:",
    
   },
   {
     type: "list",
     name: "transactionType",
     choices: ["fast cash","withdraw"],
     message: "select your transaction",
     when (answers) {
          return answers.accountType

  },
   },
   {
     type:"list",
     name: "withdrawmethod",
     choices: [1000, 2000, 10000, 20000],
     message: "select your amount",
     when (answers) {
      return answers.transactionType == "fast cash"
     }

   },
   {
     type: "list",
     name: "withdrawmethod",
     message: "Enter your amount",
    when (answers) {
      return answers.transactionType == "withdraw"
    },
  
   }
])

if (answer.userId && answer.userPin) {
   const balance = Math.floor (Math.random()*10000000);
   console.log(balance)
   const EnteredAmount  = answer.Amount
   if (balance < EnteredAmount) {
     const reamaining = balance - EnteredAmount;
     console.log ("your remaining amount id", reamaining)

   } else 
   console.log("insuficient balance ")
}