import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold(`\n\twelcom to Amna's currency converter\n\t`));
let exchange_rate = {
    USD: 1.0,
    JYP: 11.5,
    CAD: 1.3,
    AUD: 1.65,
    EUR: 0.9,
    PKR: 277.70
};
let user_answer = await inquirer.prompt([
    {
        name: "currencyFrom",
        type: "list",
        message: "select the currency to current from",
        choices: ["USD", "JYP", "CAD", "AUD", "EUR", "PKR"]
    },
    { name: "currencyTo",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "JYP", "CAD", "AUD", "EUR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        messsage: "enter the amount"
    }
]);
let from_amount = exchange_rate[user_answer.currencyFrom];
let to_amount = exchange_rate[user_answer.currencyTo];
let amount = user_answer.amount;
let baseValue = amount / from_amount;
let convertedAmount = baseValue * to_amount;
console.log(convertedAmount);
//let from_amount = exchange_rate[user_answer.currencyFrom]; // corrected variable name
