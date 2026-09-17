function sumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", function(input) {
    const numbers = input.split(" ").map(Number);

    console.log("Sum:", sumArray(numbers));

    rl.close();
});