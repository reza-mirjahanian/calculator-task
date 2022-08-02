import {
  expect,
} from 'chai';

import Stack from '../../src/utils/stack';

suite('Testing Stack', () => {
  test('stack should works correctly', () => {
    const myStack = new Stack<number>();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.unshift(-1);
    expect(myStack.size()).to.be.equal(4);
    expect(myStack.peek()).to.be.equal(3);
    expect(myStack.first()).to.be.equal(-1);
    expect(myStack.pop()).to.be.equal(3);
    expect(myStack.shift()).to.be.equal(-1);
    expect(myStack.size()).to.be.equal(2);
    myStack.push(55);
    expect(myStack.peek()).to.be.equal(55);
    myStack.clear();
    expect(myStack.size()).to.be.equal(0);
    myStack.unshift(0);
    expect(myStack.first()).to.be.equal(0);
  });
});
