// var  operation , number1, number2;
// operation = parseInt(prompt("Enter ther operation: "));
// number1 = parseInt(prompt("Enter the first number: "));
// number2 = parseInt(prompt("Enter the second number:  "));
// if (operation === '+') {
//      result = number1 + number2;
//      document.write("The sum is " + result);
// }


// // Prompt the user for operation and numbers
// const operation = prompt("Enter the operation (+, -, *, /): "); // Expect a string input
// const number1 = parseInt(prompt("Enter the first number: "));
// const number2 = parseInt(prompt("Enter the second number: "));

// // Perform the operation and display the result
// let result;

// switch (operation) {
//     case '+':
//         result = number1 + number2;
//         document.write(`The sum is ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         document.write(`The difference is ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         document.write(`The product is ${result}`);
//         break;
//     case '/':
//         if (number2 !== 0) {
//             result = number1 / number2;
//             document.write(`The division result is ${result}`);
//         } else {
//             document.write("Division by zero is not allowed.");
//         }
//         break;
//     default:
//         document.write("Invalid operation. Please enter +, -, *, or /.");
// }


var operation, number1, number2, result
operation = prompt("Enter the operation + , /, *, - : "); // Expect a string input
number1 = parseInt(prompt("Enter the first number: "));
number2 = parseInt(prompt("Enter the second number: "));

switch (operation) {
    case '+':  result = number1 + number2; break;
    case '-': result = number1 - number2; break;
    case '*': result = number1 * number2; break;
    case '/': result = number1 / number2; break;


document.write(result);





}
