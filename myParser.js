function parseArithmeticExpression(expression) {

    expression = expression.replace(/\s+/g, '');
  
    const tokens = expression.match(/(\d+\.\d+|\d+|[+\-*/()])/g);
  
    if (!tokens) {
      throw new Error('Invalid expression');
    }
  
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    function applyOperator(operators, values) {
      const operator = operators.pop();
      const right = values.pop();
      const left = values.pop();
      switch (operator) {
        case '+':
          values.push(left + right);
          break;
        case '-':
          values.push(left - right);
          break;
        case '*':
          values.push(left * right);
          break;
        case '/':
          values.push(left / right);
          break;
      }
    }
  
    const outputQueue = [];
    const operatorStack = [];
    
    tokens.forEach(token => {
      if (/\d+/.test(token)) {
        outputQueue.push(parseFloat(token));
      } else if (token in precedence) {
        while (
          operatorStack.length &&
          precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.pop()
      }
    });
  
    while (operatorStack.length) {
      outputQueue.push(operatorStack.pop());
    }
  
    const values = [];
    
    outputQueue.forEach(token => {
      if (typeof token === 'number') {
        values.push(token);
      } else {
        applyOperator(operatorStack, values);
      }
    });
  
    return values[0];
  }
  

  const expression = "3 + 4 * (2 - 1)";
  const result = parseArithmeticExpression(expression);
  console.log(result);
  