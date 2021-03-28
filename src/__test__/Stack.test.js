const { test, expect } = require('@jest/globals')
const Stack = require('../Stack/Stack')

test('test inital stack is empty',()=>{
    const stack = new Stack()
    expect(stack.isEmpty()).toBe(true)
})
test('test push to empty stack',() => {
    const stack = new Stack()
    let testData = [1,2,3,4,5]
    testData.forEach(data=>stack.push(data))
    expect(stack.toString()).toBe('5,4,3,2,1')
})
test('test pop from stack',() => {
    const stack = new Stack()
    let testData = [1,2,3,4,5]
    testData.forEach(data=>stack.push(data))
    expect(stack.toString()).toBe('5,4,3,2,1')
    expect(stack.pop()).toBe(5)
    expect(stack.toString()).toBe('4,3,2,1')
})
test('test pop from empty stack',() => {
    const stack = new Stack()
    expect(()=>stack.pop()).toThrow('stack is empty!')
})