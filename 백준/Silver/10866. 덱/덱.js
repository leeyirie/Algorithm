const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10); // Parse the first input as the number of operations
const operations = input.slice(1); // The rest are the operations as strings

class Deque {
    constructor() {
        this.items = [];
    }

    pushFront(element) {
        this.items.unshift(element);
    }

    pushBack(element) {
        this.items.push(element);
    }

    popFront() {
        return this.isEmpty() ? -1 : this.items.shift();
    }

    popBack() {
        return this.isEmpty() ? -1 : this.items.pop();
    }

    size() {
        return this.items.length;
    }

    empty() {
        return this.isEmpty() ? 1 : 0;
    }

    front() {
        return this.isEmpty() ? -1 : this.items[0];
    }

    back() {
        return this.isEmpty() ? -1 : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const deque = new Deque();
const result = [];

operations.forEach(operation => {
    const [command, value] = operation.split(' ');

    switch (command) {
        case 'push_front':
            deque.pushFront(Number(value));
            break;
        case 'push_back':
            deque.pushBack(Number(value));
            break;
        case 'pop_front':
            result.push(deque.popFront());
            break;
        case 'pop_back':
            result.push(deque.popBack());
            break;
        case 'size':
            result.push(deque.size());
            break;
        case 'empty':
            result.push(deque.empty());
            break;
        case 'front':
            result.push(deque.front());
            break;
        case 'back':
            result.push(deque.back());
            break;
    }
});

console.log(result.join('\n'));
