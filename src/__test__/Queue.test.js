const Queue = require('../Queue/Queue')
const { test, expect } = require('@jest/globals')

test('test new Queue is empty',()=>{
    const queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
})
test('adding to queue',() => {
    const testData = [1,2,3,4,5]
    const queue = new Queue()
    testData.forEach(data=>queue.add(data))
    expect(queue.toString()).toBe('1,2,3,4,5')
})
test('peek from queue',()=>{
    const testData = [1,2,3,4,5]
    const queue = new Queue()
    testData.forEach(data=>queue.add(data))
    expect(queue.toString()).toBe('1,2,3,4,5')
    expect(queue.peek()).toBe(1)
})
test('peek from empty queue',()=>{
    const queue = new Queue()
    expect(queue.peek()).toBe(undefined) 
})
test('remove from queue',()=>{
    const testData = [1,2,3,4,5]
    const queue = new Queue()
    testData.forEach(data=>queue.add(data))
    expect(queue.toString()).toBe('1,2,3,4,5')
    expect(queue.remove()).toBe(1)
})
test('remove from empty queue',()=>{
    const queue = new Queue()
    expect(()=>queue.remove()).toThrow('queue is empty!!')
})
test('remove from queue with single element',()=>{
    const queue = new Queue()
    queue.add(1)
    expect(queue.remove()).toBe(1)
    expect(queue.isEmpty()).toBe(true)
})