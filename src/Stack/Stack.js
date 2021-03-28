const Node = require('../Commons/Node')

class Stack {
    constructor(){
        this.top = null
    }
    isEmpty(){
        if(this.top){
            return false
        }
        return true
    }

    push(data){
        let newNode = new Node(data)
        if(this.top){
            newNode.next = this.top
        }
        this.top = newNode
    }
    pop(){
        if(!this.top){
            throw new Error('stack is empty!')
        }
        let result = this.top.data
        this.top = this.top.next?this.top.next:null
        return result
    }
    toString(){
        let elements = []
        let current = this.top
        while(current){
            elements.push(current.data)
            current = current.next
        }
        return elements.map(data=>`${data}`).toString()
    }
}
module.exports = Stack