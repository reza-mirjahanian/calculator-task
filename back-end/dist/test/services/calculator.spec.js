"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const calculator_1 = __importDefault(require("../../src/services/calculator"));
function simulatePressingKeys(keys) {
    return keys.map((key) => {
        if (typeof key === 'number') {
            return {
                value: key.toString(),
                type: 'number',
            };
        }
        return {
            value: key.toString(),
            type: 'operator',
        };
    });
}
suite('Testing Calculator', () => {
    suite('Reset function / AC button', () => {
        test('should return correct answer', () => {
            const calculator = new calculator_1.default();
            (0, chai_1.expect)(calculator.peek()).to.be.equal(undefined);
            // 2 + 3
            simulatePressingKeys([2, '+', 3]).forEach((item) => {
                calculator.insertItem(item);
            });
            calculator.reset();
            (0, chai_1.expect)(calculator.peek()).to.be.equal(undefined);
        });
    });
    suite('Normal inputs', () => {
        test('should return correct answer (samples 1)', () => {
            const calculator = new calculator_1.default();
            // 2 + 3
            simulatePressingKeys([2, '+', 3, '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(5);
            calculator.reset();
            // 2 - 3
            simulatePressingKeys([2, '-', 3, '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            simulatePressingKeys(['=', '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(-1);
            calculator.reset();
            // 3 / 2
            simulatePressingKeys([3, '/', 2, '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(1.5);
            calculator.reset();
            // -4 * 3
            simulatePressingKeys([-4, '*', 3, '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(-12);
            calculator.reset();
            // 20 %
            simulatePressingKeys([20, '%']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(0.2);
            calculator.reset();
            // 20 %
            simulatePressingKeys([20, '%', '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(0.2);
            calculator.reset();
            // 20 % %
            simulatePressingKeys([20, '%', '%']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(0.002);
            calculator.reset();
        });
        test('should return correct answer (samples 2)', () => {
            const calculator = new calculator_1.default();
            // 2 + 3 + -7 + 0 - 25 - 10 + 1
            simulatePressingKeys([2, '+', 3, '+', -7, '+', 0, '-', 25, '-', 10, '+', 1, '+']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(-36);
            calculator.reset();
            // 2 * 3 + -7 + 0 - 25 / 10 * 1
            simulatePressingKeys([2, '*', 3, '+', -7, '+', 0, '-', 25, '/', 10, '*', 1, '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(-2.6);
            calculator.reset();
            // 2 / 25 %
            simulatePressingKeys([2, '/', 25, '%', '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(8);
            calculator.reset();
            //  25%
            simulatePressingKeys([25, '%']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(0.25);
            calculator.reset();
            //  25% * 100 + 100
            simulatePressingKeys([25, '%', '*', 100, '+', 100, '=']).forEach((item) => {
                calculator.insertItem(item);
            });
            (0, chai_1.expect)(calculator.peek()).to.be.equal(125);
            calculator.reset();
        });
    });
});
//# sourceMappingURL=calculator.spec.js.map