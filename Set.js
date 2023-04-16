class Set {
    constructor(collection = []) {
        this.collection  = collection;
    }

    values() {
        return this.collection;
    }

    size() {
        return this.collection.length;
    }

    add(item) {
        if (!this.has(item)) {
            this.collection.push(item);
            return true;
        }
        return false;
    }

    remove(item) {
        if (this.has(item)) {
            const index = this.collection.indexOf(item);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    has(value) {
        return (this.collection.indexOf(value) !== -1);
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

const data = new Set(0, []);

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

