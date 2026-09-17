# Assignment for Module 5

## Question 1
Convert Celsius to Fahrenheit
Write a function that takes a temperature in Celsius and converts it to Fahrenheit using the formula: $F = (C \times 9/5) + 32$.

### Input Output
<img width="1326" height="341" alt="image" src="https://github.com/user-attachments/assets/1b952ad3-a4c6-4378-9c61-f6094cd65635" />

### Explanation
The program takes a temperature in Celsius as input from the user. It then uses the formula `(C × 9/5) + 32` to convert the temperature from Celsius to Fahrenheit. Finally, it displays the converted temperature as the output.
For example, if the user enters 25°C, the program calculates `(25 × 9/5) + 32`, which gives 77°F.

## Question 2
Find the Factorial of a Number
Write a function that calculates the factorial of a given non-negative integer (e.g., $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$).

### Input Output
<img width="1337" height="342" alt="image" src="https://github.com/user-attachments/assets/7127b967-7ad9-4237-befb-24e2d9e5a487" />

### Explanation
The program takes a non-negative integer as input from the user and calculates its factorial. It uses a for loop to multiply all the numbers from 1 up to the given number. The final result is then displayed as the factorial.
For example, if the user enters 5, the calculation is 1 × 2 × 3 × 4 × 5 = 120. Therefore, the factorial of 5 is 120.

## Question 3
Check for Palindrome
Write a function that checks if a given word (e.g., "racecar") reads the same backward as forward and returns true or false.

### Input Output
<img width="1331" height="337" alt="image" src="https://github.com/user-attachments/assets/d75a6eea-fc23-48bb-ac6c-38e943e11b48" />

### Explanation
The program takes a word as input from the user. It reverses the word and compares the reversed word with the original word. If both words are the same, the function returns true. Otherwise, it returns false.
For example, "racecar" remains "racecar" when reversed, so the result is true. However, "below" becomes "woleb", so the result is false.

## Question 4
Sum of Array Elements
Write a function that takes an array of numbers and returns the sum of all elements in the array.

### Input Output
<img width="1336" height="342" alt="image" src="https://github.com/user-attachments/assets/23f3f360-60ff-4f7d-a431-60a1f9d5021f" />

### Explanation
The program takes multiple numbers from the user and stores them in an array. It then uses a for loop to go through each number and add it to a sum variable. After all the elements are processed, the total sum is displayed.
For example, if the user enters 10, 20, 30, and 40, the program calculates 10 + 20 + 30 + 40 = 100. Therefore, the output is 100.

## Question 5
FizzBuzz (Basic)
Write a loop from 1 to 15 that prints "Fizz" for numbers divisible by 3, "Buzz" for numbers divisible by 5, "FizzBuzz" for numbers divisible by both, and the number itself otherwise.

### Input Output
<img width="1332" height="455" alt="image" src="https://github.com/user-attachments/assets/3e38b769-820c-4463-98fa-35c9781d5d6d" />

### Explanation
The program uses a for loop to go through the numbers from 1 to 15. For each number, it checks whether the number is divisible by 3, 5, or both using the modulus (%) operator.
If the number is divisible by both 3 and 5, it prints "FizzBuzz". If it is divisible only by 3, it prints "Fizz". If it is divisible only by 5, it prints "Buzz". Otherwise, it prints the number itself.
For example, 3 prints "Fizz", 5 prints "Buzz", 15 prints "FizzBuzz", and 7 prints 7.
