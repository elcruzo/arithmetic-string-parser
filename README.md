# Arithmetic String Parser

This repository contains a JavaScript-based arithmetic string parser. The code defines a `parseArithmeticExpression` function that takes an arithmetic expression as input and returns its result. This parser can handle basic arithmetic operations, including addition (+), subtraction (-), multiplication (*), and division (/).

## Introduction

The `parseArithmeticExpression` function in this codebase is a versatile tool for evaluating arithmetic expressions in JavaScript. It follows these key steps:

1. **Tokenization**: The input arithmetic expression is tokenized, removing any whitespace and splitting it into meaningful tokens.

2. **Shunting Yard Algorithm**: The Shunting Yard algorithm is employed to convert the infix notation expression (the standard notation) into Reverse Polish Notation (RPN), which simplifies the evaluation process.

3. **Evaluation**: The RPN expression is then evaluated, and the result is calculated accurately, taking into account operator precedence and parentheses.

## Usage

To use this arithmetic string parser, follow these steps:

1. Include the `parseArithmeticExpression` function in your JavaScript project.

2. Call the function, passing an arithmetic expression as a string.

3. The function will return the computed result of the expression.

Example usage:

```javascript
const expression = "3 + 4 * (2 - 1)";
const result = parseArithmeticExpression(expression);
console.log(result); // Output: 7
```

Feel free to customize and integrate this parser into your projects as needed.

## License

This code is provided under the [MIT License](LICENSE.md). You are free to use, modify, and distribute it in accordance with the terms of the license.

## Contributing

If you find any issues, have suggestions for improvements, or would like to contribute to this project, please open an issue or submit a pull request. Your contributions are highly appreciated!

## Author

[ElCruzo](https://github.com/elcruzo/)

## Contact

If you have any questions or need further assistance, you can reach out to me by [E-Mail](mailto:ayomideadekoya266@gmail.com).

Happy parsing!