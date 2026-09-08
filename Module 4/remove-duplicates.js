const readline = require ('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter numbers separated by spaces: ', (input) => {
    let numbers = input.split(' ');
    let uniqueNumbers = [...new Set(numbers)];
    console.log("Original array:", numbers);
    console.log("Array without duplicates:", uniqueNumbers);
    rl.close();
});
