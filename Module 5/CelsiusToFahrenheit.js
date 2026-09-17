const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter temperature in Celsius: ", function(celsius) {
    const fahrenheit = (Number(celsius) * 9 / 5) + 32;

    console.log("Temperature in Fahrenheit:", fahrenheit);

    rl.close();
});