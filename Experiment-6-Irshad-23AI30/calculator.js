// Experiment-6-Irshad-23AI30
// Aim: Node.js Installation and Configuration - Calculator Program

const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("📘 Node.js Calculator");
console.log("----------------------");

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (+, -, *, /): ", (op) => {

      let result;
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      switch (op) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            console.log("❌ Cannot divide by zero!");
            rl.close();
            return;
          }
          result = num1 / num2;
          break;
        default:
          console.log("❌ Invalid operation!");
          rl.close();
          return;
      }

      console.log(`✅ Result: ${num1} ${op} ${num2} = ${result}`);
      rl.close();
    });
  });
});
