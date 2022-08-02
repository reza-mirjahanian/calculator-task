interface IStack<T> {
  push(item: T): void;

  pop(): T | undefined;

  peek(): T | undefined;

  shift(): T | undefined;

  first(): T | undefined;

  size(): number;

  clear():void
}

export default class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  first(): T | undefined {
    return this.storage[0];
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  shift(): T | undefined {
    return this.storage.shift();
  }

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error('Capacity exceeded');
    } else {
      this.storage.push(item);
    }
  }

  unshift(item: T): void {
    if (this.size() === this.capacity) {
      throw Error('Capacity exceeded');
    } else {
      this.storage.unshift(item);
    }
  }

  size(): number {
    return this.storage.length;
  }

  clear() {
    this.storage = [];
  }

  debug() {
    console.log(this.storage);
  }
}
