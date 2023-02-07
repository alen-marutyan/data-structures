class Queue {
    constructor(storage = []) {
        this.storage = storage;
    }

    print(value) {
        return this.storage;
    }

    enqueue(item) {
        return this.storage.push(item);
    }

    dequeue() {
        return this.storage.shift();
    }

    front() {
        return this.storage[0];
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    size() {
        return this.storage.length;
    }
}

const data = new Queue([]);

// Add an element at the end.
data.enqueue(1);
data.enqueue(2);
data.enqueue(3);
console.log(data.print());

// Remove the front element and return it.
data.dequeue();
console.log(data.print());

// Get the first element.
console.log(data.front());

// Determine whether the queue is empty.
console.log(data.isEmpty());

// Get the number of element(s) in queue.
console.log(data.size());

