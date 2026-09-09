const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        rl.question("Enter third number: ", (num3) => {
            num1 = Number(num1);
            num2 = Number(num2);
            num3 = Number(num3);
            if(num1 >= num2 && num1 >= num3) {
                console.log(`${num1} is the largest number.`);
            } else if(num2 >= num1 && num2 >= num3) {
                console.log(`${num2} is the largest number.`);
            } else {
                console.log(`${num3} is the largest number.`);
            }
            rl.close();
        });
    });
});