function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a non-negative integer: ", function(input) {
    const number = Number(input);

    console.log("Factorial:", factorial(number));

    rl.close();
});