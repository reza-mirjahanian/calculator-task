"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const input_normalize_1 = require("../../src/services/input.normalize");
suite('Testing Input.Normalize', () => {
    suite('Should handle operator characters', () => {
        test('should return the CalcInput object for a correct operator', () => {
            ['+', '   +  ', '-', '/', '*', '%', 'AC'].forEach((item => {
                (0, chai_1.expect)((0, input_normalize_1.normalize)(item)).to.be.deep.equal({
                    value: item.trim(),
                    type: 'operator',
                });
            }));
        });
        test('should return null for  a wrong operator', () => {
            ['!', '#', '&', '_', '('].forEach((item => {
                (0, chai_1.expect)((0, input_normalize_1.normalize)(item)).to.be.equal(null);
            }));
        });
    });
    suite('Should handle numeric input', () => {
        test('should return the CalcInput object for a correct number', () => {
            ['12', '-1', '1.5', '212.23', '-12.23', '-9.', '10.', '0', '0.', '0.001', '-0.01', '.2', '-.2'].forEach((item => {
                (0, chai_1.expect)((0, input_normalize_1.normalize)(item)).to.be.deep.equal({
                    value: parseFloat(item.trim()).toString(),
                    type: 'number',
                });
            }));
        });
        test('should return null for  a wrong numeric input', () => {
            ['1..', '1  2', '--2', 'NAN'].forEach((item => {
                (0, chai_1.expect)((0, input_normalize_1.normalize)(item)).to.be.equal(null);
            }));
        });
    });
});
//# sourceMappingURL=input.normailze.spec.js.map