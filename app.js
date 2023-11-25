import inquirer from "inquirer";
const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Rice",
    "Pasta",
    "Canned Beans",
    "Bread",
    "Carrot",
    "Broccoli"
];
const prices = [
    10,
    120,
    50,
    70,
    220,
    900,
    100,
    330,
    500,
    33
];
console.table([
    { Item: "Apple", Price: 10 },
    { Item: "Banana", Price: 120 },
    { Item: "Orange", Price: 50 },
    { Item: "Grapes", Price: 70 },
    { Item: "Rice", Price: 220 },
    { Item: "Pasta", Price: 900 },
    { Item: "Canned Beans", Price: 100 },
    { Item: "Bread", Price: 330 },
    { Item: "Carrot", Price: 500 },
    { Item: "Broccoli", Price: 33 }
]);

let customerResponce = await inquirer.prompt([{
        name: "First",
        type: "number",
        message: "Please select in menu: "
    },
    {
        name: 'second',
        type: 'input',
        message: 'anything else:',
    },
    {
        name: 'third',
        type: 'input',
        message: 'anything else:',
    },
    {
        name: 'four',
        type: 'input',
        message: 'anything else:',
    },
    {
        name: 'five',
        type: 'input',
        message: 'anything else:',
    },
    {
        name: 'six',
        type: 'input',
        message: 'anything else:',
    }
]);
let total = (prices[customerResponce.First] + prices[customerResponce.second] + prices[customerResponce.third] + prices[customerResponce.four] + prices[customerResponce.five] + prices[customerResponce.six]);
console.log("Sir your Bill is "+ total)
if (total > 1200) {
    console.log("sir You are eligibe for discount 20%");
    total = total - (20 * total / 100);
    console.log(`sir total bill is  ${total}`);
    console.log(`How would you Like to pay 
    0-By Cash 
    1-By Card
    `);
    let payment = await inquirer.prompt([{
            name: "method",
            type: "number",
            message: "Please select payment method:"
        }
    ]);
    if (payment.method === 0) {
        console.log(`How much cash will you pay sir please enter amount greater or equal than your bill`);
        let Cash = await inquirer.prompt([{
                name: "csh",
                type: "number",
                message: "Please enter the cash"
            }
        ]);
        console.log(`Sir here is your change ${Cash.csh - total}  Thank alot for shoping please come again`);
    }
    else if (payment.method === 1) {
        console.log(`Please enter your credit card pin`);
        let cardpin = await inquirer.prompt([{
                name: "pin",
                type: "number",
                message: "Card Pin:"
            }
        ]);
        console.log(`Sir here is your Bill Thank alot for shoping please come again`);
    }
}
else {
    console.log(`sir you are not eligble for any discount you total bill is  ${total}`);
    console.log(`sir total bill is  ${total}`);
    console.log(`How would you Like to pay 
    0-By Cash 
    1-By Card
    `);
    let payment = await inquirer.prompt([{
            name: "method",
            type: "number",
            message: "Please select payment method:"
        }
    ]);
    if (payment.method === 0) {
        console.log(`How much cash will you pay sir please enter amount greater or equal than your bill`);
        let Cash = await inquirer.prompt([{
                name: "csh",
                type: "number",
                message: "Please enter the cash"
            }
        ]);
        console.log(`Sir here is your change ${Cash.csh - total}  Thank alot for shoping please come again`);
    }
    else if (payment.method === 1) {
        console.log(`Please enter your credit card pin`);
        let cardpin = await inquirer.prompt([{
                name: "pin",
                type: "number",
                message: "Card Pin:"
            }
        ]);
        console.log(`Sir here is your Bill Thank alot for shoping please come again`);
    }
}
