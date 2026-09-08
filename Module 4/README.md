# Q1: JavaScript Coding Practice
## Check whether a number is even or odd.
### Output
<img width="1317" height="322" alt="image" src="https://github.com/user-attachments/assets/8be3230d-746e-4614-820d-fffa496d35ac" />

### Explanation
This program takes a number from the user and checks whether it is **even or odd**. The `readline` module is used to receive input from the terminal. The `%` operator finds the remainder when the number is divided by 2. If the remainder is `0`, the number is even; otherwise, it is odd. `rl.close()` closes the input interface after the program finishes.

## Find the largest of three numbers.
### Output
<img width="1295" height="321" alt="image" src="https://github.com/user-attachments/assets/66098695-8437-4342-b81f-42aadf302a6e" />

### Explanation
This program takes **three numbers as input** from the user and compares them to find the largest one. The `if...else if...else` statements compare each number with the other two using `>=` and `&&`. The largest number is then displayed using `console.log()`. Finally, `rl.close()` closes the input interface.

## Reverse a string.
### Output
<img width="1322" height="277" alt="image" src="https://github.com/user-attachments/assets/29ef108f-095b-4127-b0ea-b60c0a2c684b" />

### Explanation
This program reverses the string `"JavaScript"`. First, `split("")` converts the string into an array of individual characters. Then, `reverse()` reverses the array, and `join("")` combines the characters back into a string. Finally, `console.log()` displays the original and reversed strings.

## Count vowels in a string.
### Output
<img width="1306" height="310" alt="image" src="https://github.com/user-attachments/assets/ad66746c-5cd9-48f9-889f-504eee59eebb" />

### Explanation
This program takes a **string as input** and counts how many vowels it contains. The `for...of` loop checks each character in the string. The `includes()` method checks whether the character is a vowel (`a, e, i, o, u`) in either uppercase or lowercase. Each time a vowel is found, `vowelsCount` is increased by 1. Finally, the total number of vowels is displayed, and `rl.close()` closes the input interface.

##Remove duplicate values from an array.
### Output
<img width="1293" height="315" alt="image" src="https://github.com/user-attachments/assets/97212a4d-84d7-42aa-a7ca-212fe13533e5" />

### Explanation
This program takes **numbers as input**, separates them into an array using `split(' ')`, and removes duplicate values using `Set`. The spread operator `...` converts the `Set` back into an array. Finally, it displays both the original array and the array without duplicates. `rl.close()` closes the input interface.
