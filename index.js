class Node{
    constructor(value){
        this.value = value
        this.head = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
}

const list = new LinkedList();
console.log("Is List empty?",list.isEmpty())
console.log("List size",list.getSize())