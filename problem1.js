/* Create a small calculator which performs operations such as Addition, 
Subtraction, Multiplication and Division using class.
    Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
    Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string */

    class Calculator {
        constructor(a, b, operation) {
          this.a = parseFloat(a);
          this.b = parseFloat(b);
          this.operation = operation.toLowerCase();
        }
      
        calculate() {
          let result;
      
          switch (this.operation) {
            case 'addition':
              result = this.a + this.b;
              break;
            case 'subtraction':
              result = this.a - this.b;
              break;
            case 'multiplication':
              result = this.a * this.b;
              break;
            case 'division':
              if (this.b === 0) {
                result = 'Cannot divide by zero';
              } else {
                result = this.a / this.b;
              }
              break;
            default:
              result = 'Invalid operation';
          }
      
          return result;
        }
      }
      
      // Example usage:
      const calculator = new Calculator(5, 3, 'addition');
      console.log(calculator.calculate()); // Output: 8
      
      const calculator2 = new Calculator(10, 2, 'division');
      console.log(calculator2.calculate()); // Output: 5
      
      const calculator3 = new Calculator(4, 2, 'power');
      console.log(calculator3.calculate()); // Output: Invalid operation
      