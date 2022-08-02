"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor(capacity = Infinity) {
        this.capacity = capacity;
        this.storage = [];
    }
    peek() {
        return this.storage[this.size() - 1];
    }
    first() {
        return this.storage[0];
    }
    pop() {
        return this.storage.pop();
    }
    shift() {
        return this.storage.shift();
    }
    push(item) {
        if (this.size() === this.capacity) {
            throw Error('Capacity exceeded');
        }
        else {
            this.storage.push(item);
        }
    }
    unshift(item) {
        if (this.size() === this.capacity) {
            throw Error('Capacity exceeded');
        }
        else {
            this.storage.unshift(item);
        }
    }
    size() {
        return this.storage.length;
    }
    clear() {
        this.storage = [];
    }
}
exports.default = Stack;
//# sourceMappingURL=stack.js.map