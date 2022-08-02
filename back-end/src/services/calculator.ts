import { CalcInput } from '../types';
import Stack from '../utils/stack';

export default class Calculator {
  private numStack;

  private opStack;

  constructor() {
    this.numStack = new Stack<number>();
    this.opStack = new Stack<string>();
  }

  insertItem(input:CalcInput) {
    const { value, type } = input;

    if (type === 'number') {
      if (this.opStack.size() < 1 && this.numStack.size() > 0) { // A patch for reminder or previous operations
        this.numStack.clear();
      }
      this.numStack.push(parseFloat(value));
    } else if (input.type === 'operator') {
      if (['+', '/', '-', '*'].includes(value)) { // Not '=' or 'AC'
        this.opStack.push(value);
      } else if (value === '%') { // The priority of '%' is the highest, so add it at the first.
        this.opStack.unshift(value);
      }
      this.tryCalc();
    }
  }

  lastResult() {
    return this.numStack.peek();
  }

  // AC Button
  reset() {
    this.numStack.clear();
    this.opStack.clear();
  }

  private tryCalc() : number | undefined {
    let result;
    while (true) {
      const nextOperator = this.opStack.first();
      if (!nextOperator) return;
      const operandCount = this.getOperandCount(nextOperator);
      if (this.numStack.size() >= operandCount) {
        result = 0;
        if (operandCount === 2) {
          const b = this.numStack.pop()!;
          const a = this.numStack.pop()!;
          this.opStack.shift();
          if (nextOperator === '+') {
            result = a + b;
          } else if (nextOperator === '-') {
            result = a - b;
          } else if (nextOperator === '*') {
            result = a * b;
          } else if (nextOperator === '/') {
            // Todo handle b==0 , maybe return Infinity
            result = (b === 0) ? 0 : a / b;
          }
        }
        if (operandCount === 1) {
          const a = this.numStack.pop()!;
          this.opStack.shift();
          if (nextOperator === '%') { // Todo I'm not sure how '%' works exactly on Iphone
            result = a * 0.01;
          }
        }

        this.numStack.push(result);
      } else {
        return;
      }
    }
  }

  private getOperandCount(operator:string) : number {
    if (['+', '-', '/', '*'].includes(operator)) {
      return 2;
    }
    if (['%'].includes(operator)) {
      return 1;
    }
    return -1;
  }
}
