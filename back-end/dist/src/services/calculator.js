"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = __importDefault(require("../utils/stack"));
class Calculator {
    constructor() {
        this.numStack = new stack_1.default();
        this.opStack = new stack_1.default();
    }
    insertItem(input) {
        const { value, type } = input;
        if (type === 'number') {
            this.numStack.push(parseFloat(value));
        }
        else if (input.type === 'operator') {
            if (['+', '/', '-', '*'].includes(value)) { // Not '=' or 'AC'
                this.opStack.push(value);
            }
            else if (value === '%') { // The priority of '%' is the highest, so add it at the first.
                this.opStack.unshift(value);
            }
            this.tryCalc();
        }
    }
    peek() {
        return this.numStack.peek();
    }
    // AC Button
    reset() {
        this.numStack.clear();
        this.opStack.clear();
    }
    tryCalc() {
        const nextOperator = this.opStack.first();
        if (!nextOperator)
            return;
        const operandCount = this.getOperandCount(nextOperator);
        if (this.numStack.size() >= operandCount) {
            let result = 0;
            if (operandCount === 2) {
                const b = this.numStack.pop();
                const a = this.numStack.pop();
                this.opStack.shift();
                if (nextOperator === '+') {
                    result = a + b;
                }
                else if (nextOperator === '-') {
                    result = a - b;
                }
                else if (nextOperator === '*') {
                    result = a * b;
                }
                else if (nextOperator === '/') {
                    result = a / b; // Todo handle b==0 , maybe return Infinity
                }
            }
            if (operandCount === 1) {
                const a = this.numStack.pop();
                this.opStack.shift();
                if (nextOperator === '%') { // Todo I'm not sure how '%' works exactly on Iphone
                    result = a * 0.01;
                }
            }
            this.numStack.push(result);
            return result;
        }
    }
    getOperandCount(operator) {
        if (['+', '-', '/', '*'].includes(operator)) {
            return 2;
        }
        if (['%'].includes(operator)) {
            return 1;
        }
        return -1;
    }
}
exports.default = Calculator;
//# sourceMappingURL=calculator.js.map
