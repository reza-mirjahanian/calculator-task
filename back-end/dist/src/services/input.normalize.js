"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = void 0;
const lodash_1 = __importDefault(require("lodash"));
const validOps = ['+', '-', '/', '*', '%', 'AC', '='];
// We assume '.' equal to Zero!
const fixes = {
    '-0': '0',
    '-.': '0',
    '.': '0',
};
const normalize = (rawInput) => {
    let input = lodash_1.default.trim(rawInput);
    if (fixes[input]) {
        input = fixes[input];
    }
    if (validOps.includes(input)) {
        return {
            value: input,
            type: 'operator',
        };
    }
    if (input.match(/^[+-]?\d*(\.\d*)?$/)) {
        return {
            value: parseFloat(input).toString(),
            type: 'number',
        };
    }
    return null;
};
exports.normalize = normalize;
//# sourceMappingURL=input.normalize.js.map