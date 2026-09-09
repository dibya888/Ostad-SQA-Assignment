const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (text) => {
    let vowelsCount = 0;
    for (let char of text){
        if ('aeiouAEIOU'.includes(char)) { 
            vowelsCount++;
        }
    }
    console.log(`The number of vowels in "${text}" is: ${vowelsCount}`);
    rl.close();
});