
/**
 * Using type fixed-size circular queues
 */
class Queue{
    private index: number = 0
    private _queue: string[] = new Array(this.size)


    /**
     *
     */
    constructor(private readonly size: number) {}

    isFull(){
        return this.index === this.size
    }

    isEmpty(){
        return this.index === 0
    }

    get length(){
        return this.index
    }

    rear(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return undefined
        }
        const lastIndex = this.index - 1
        return this._queue[lastIndex]
    }

    front(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return undefined
        }
        return this._queue[0]
    }

    enqueue(item: string){
        if(this.isFull()){
            console.log("Queue is full!")
            return undefined
        }
        this._queue[this.index] = item
        this.index++
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return undefined
        }

        this.index--
        let count = 0
        const newQueue: (typeof this._queue) = new Array(this.size)
        const lastElement = this.front()
        for(const item of this._queue){
            if(count !== 0) newQueue[count - 1] = item 
            if(this.length === count) break
            count ++
        }
        this._queue = newQueue
        return lastElement
    }

    get queue(){
        return this._queue
    }
}

const myQueue = new Queue(10)
myQueue.enqueue("user 1")
myQueue.enqueue("user 2")
myQueue.enqueue("user 3")
myQueue.enqueue("user 4")
myQueue.enqueue("user 5")
myQueue.enqueue("user 6")
myQueue.enqueue("user 7")
myQueue.enqueue("user 8")
myQueue.enqueue("user 9")
myQueue.enqueue("user 10")
myQueue.enqueue("user 11")

while(myQueue.length !== 0){
    console.log("============= QUEUE ===============")
    console.log("Queue: ", myQueue.queue)
    console.log("Front: ", myQueue.front())
    console.log("Rear: ", myQueue.rear())
    const dequeue = myQueue.dequeue()
    if(dequeue) console.log("Dequeue: ", dequeue)
}

