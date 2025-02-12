class Node {
  constructor(value) {
    this.value = value;
    this.head = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if(index===0){
        this.prepend(value)
    }else{
        const node = new Node(value)
        let prev = this.head
        for(let i =0;i<index-1;i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }
  }
}

const list = new LinkedList();
console.log("Is List empty?", list.isEmpty());
console.log("List size", list.getSize());
list.print();
list.append(10);
list.print();
list.append(20);
list.append(30);
list.append(40);
list.insert(25,2)
list.print();
