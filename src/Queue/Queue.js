const Node = require('../Commons/Node')

class Queue {
    constructor(){
        this.head = null
        this.tail = null
    }

    add(data){
        const newNode = new Node(data)
        if(this.tail){
            this.tail.next = newNode
        }
        this.tail = newNode
        if(!this.head)
        {
            this.head = newNode
        }
    }

    isEmpty(){
        return !this.head && !this.tail
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.head.data
    }

    remove(){
        if(this.isEmpty()){
            throw Error('queue is empty!!')
        }
        let result = this.head.data
        this.head = this.head.next
        if(!this.head){
            this.tail = null
        }
        return result
    }
    toString(){
        const elements = []
        let current = this.head
        while(current){
            elements.push(current.data)
            current = current.next
        }
        return elements.map(data=>`${data}`).toString()
    }

}

module.exports = Queue