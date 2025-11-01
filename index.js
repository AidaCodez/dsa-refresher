/*let fruits = ["mango", "banana", "apple", "coconut"];

//print the array
console.log(fruits);

//print a specific element in the array
console.log(fruits[1]);

//print number of element in the array
console.log(fruits.length);

//print all elements inside the array
for(let i= 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//print all elements inside the array in reverse
for(let i= fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

//print all element inside the array with for each loop
for(let fruit of fruits){
    console.log(fruit);
}

//print index of an element in array
console.log(fruits.indexOf("coconut"));

//print the array in alphabetically
console.log(fruits.sort());

//print the array in reverse
console.log(fruits.sort().reverse());

//add an element into the array
console.log(fruits.push("lemon"));
console.log(fruits);

//remove the last element of the array
console.log(fruits.pop());
console.log(fruits);

//add an element from beginning of the array
console.log(fruits.unshift("papaya"));
console.log(fruits);

//remove the element from beginning of the array
console.log(fruits.shift());
console.log(fruits);*/

/*class Stack {
    // items = []

    // push(element){
    //     this.items.push(element);
    // }

    // pop(){
    //     return this.items.pop();
    // }

    // isEmpty(){
    //     return this.size() === 0;
    // }

    // size(){
    //     return this.items.length;
    // }

    // peek(){
    //     return this.items[this.size() - 1];
    // }
    constructor(){
        this.storage = {};
        this.size = 0;
    }

    push(element){
        this.storage[this.size] = element;
        this.size++;
    }

    pop(){
        let removed = this.storage[this.size -1];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek(){
        return this.storage[this.size -1];
    }
}

const stack = new Stack();
// stack.push({ id: "1", name: "foo"});
// stack.push({ id: "2", name: "bar"});
// stack.push({ id: "3", name: "baz"});
// console.log(stack.size());
// console.log(stack.isEmpty());
// const firstElement = stack.pop();
// console.log(firstElement, stack.items);

stack.push('dog');
stack.push('cat');
stack.push('bear');
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());*/

/*class Queue{
    // items = [];

    // enqueue(element){
    //     this.items.push(element);
    // }

    // dequeue(){
    //     return this.items.shift(); //this is 0(n) complexity due to shift of index
    // }

    // isEmpty(){
    //     return this.size() === 0;
    // }

    // size(){
    //     return this.items.length;
    // }

    // peek(){
    //     return this.items[0];
    // }
    constructor(){
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element){
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeue(){
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }

    peek(){
        return this.storage[this.head];
    }
}

const queue = new Queue;
// queue.enqueue({ id: "1", name: "foo"});
// queue.enqueue({ id: "2", name: "bar"});
// queue.enqueue({ id: "3", name: "baz"});
// console.log(queue.size());
// console.log(queue.isEmpty());
// const firstElement = queue.dequeue();
// console.log(firstElement, queue.items);

queue.enqueue('red');
queue.enqueue('blue');
queue.enqueue('yellow');
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());*/

/*//singly linked list
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
const node = new Node(111);
console.log(node);

class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    }
    add(value){
        const newNode = new Node(value);
        if (this.size === 0){
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.size++;
    }
    //this is 0(n) complexity due to need loop to access the index 
    getByIndex(index){
        let position = 0;
        let currentNode = this.head;

        while(position < index){
            currentNode = currentNode.next;
            position++;
        }
        return currentNode;
    }

    addByIndex(index, value){
        const newNode = new Node(value);

        if(this.size === 0){
            this.head = newNode;
            return;
        }

        const previousNode = this.getByIndex(index -1)
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.size++;
    }

    removeByIndex(index){
        let currentNode = this.head;
        if (this.size === 0){
            this.head = currentNode.next;
        } else {
            const previousNode = this.getByIndex(index -1);
            previousNode.next = previousNode.next.next;

        }

    }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.addByIndex(1, 5);
linkedList.removeByIndex(1);
console.log(linkedList.getByIndex(1));
console.log(linkedList);*/

//doubly linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    getByIndex(index) {
        if (index < 0 || index >= this.size) return null;

        let currentNode;
        // Optimization: traverse from head or tail depending on index position
        if (index < this.size / 2) {
            currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
        } else {
            currentNode = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                currentNode = currentNode.prev;
            }
        }
        return currentNode;
    }

    addByIndex(index, value) {
        if (index < 0 || index > this.size) return;

        const newNode = new Node(value);

        if (index === 0) {
            // Insert at head
            if (this.head) {
                newNode.next = this.head;
                this.head.prev = newNode;
            }
            this.head = newNode;
            if (this.size === 0) this.tail = newNode;
        } else if (index === this.size) {
            // Insert at tail
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            // Insert in the middle
            const previousNode = this.getByIndex(index - 1);
            const nextNode = previousNode.next;

            previousNode.next = newNode;
            newNode.prev = previousNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
        }

        this.size++;
    }

    removeByIndex(index) {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            // Remove head
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null; // list is now empty
        } else if (index === this.size - 1) {
            // Remove tail
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            // Remove in middle
            const nodeToRemove = this.getByIndex(index);
            const prevNode = nodeToRemove.prev;
            const nextNode = nodeToRemove.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }

        this.size--;
    }
}

const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.addByIndex(1, 5);
list.removeByIndex(1);

console.log(list.getByIndex(1));
console.log(list);


