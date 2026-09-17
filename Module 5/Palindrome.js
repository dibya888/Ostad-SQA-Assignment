function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");

    return word === reversed;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a word: ", function(word) {
    console.log(isPalindrome(word));

    rl.close();
});