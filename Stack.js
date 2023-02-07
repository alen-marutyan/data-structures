class Stack {
    constructor(count = 0, storage = {}) {
        this.count = count;
        this.storage = storage;
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek() {
        return this.storage[this.count - 1];
    }

    size() {
        return this.count;
    }
}

const data = new Stack(0, []);

// Input a new element.
data.push(1);
data.push(2);
data.push(3);
console.log(data);

// Remove the top element, return the removed element.
data.pop();
console.log(data);

// Return the top element.
console.log(data.peek());

// Return the number of element(s) in the stack.
console.log(data.count);

