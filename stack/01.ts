class Pilha{
    private index: number = 0
    private fullCount: number = 10
    private _pilha: string[] = []

    push(item: string){
        if(this.fullCount === this.index){
            console.log("Stack is full")
            return
        }
        this._pilha[this.index] = item
        this.index++
    }

    pop(){
        if(this.index === 0) return undefined

        this.index--
        let count = 0
        const newPilha: (typeof this.pilha) = []
        const lastElement = this.pilha[this.index]
        for(const item of this.pilha){
            if(count !== this.index) {
                newPilha[count] = item
            }
            count ++
        }
        this._pilha = newPilha
        return lastElement
        
        /* // * OLD
        let count = 0
        const newPilha: (typeof this.pilha) = []
        let lastElement;
        if(this.index !== 0){
            for(const item of this.pilha){
                if((count + 1) !== this.index) {
                    newPilha[count] = item
                    count ++
                }else lastElement = item
            }
            this._pilha = newPilha
            this.index--
            return lastElement
        } */
    }

    length(){
        return this.index
    }

    get pilha(){
        return this._pilha
    }
}

const firstPilha = new Pilha()
firstPilha.push("carro 01")
firstPilha.push("carro 02")
firstPilha.push("carro 03")
firstPilha.push("carro 04")
firstPilha.push("carro 05")
firstPilha.push("carro 06")
firstPilha.push("carro 08")
firstPilha.push("carro 08")
firstPilha.push("carro 09")
firstPilha.push("carro 08")
//firstPilha.push("carro 11")
firstPilha.pop()
console.log(firstPilha.pilha)
/* console.log(firstPilha.pilha + " => " + firstPilha.length())
const last = firstPilha.pop()
console.log(firstPilha.pilha + " => " + firstPilha.length() + " => "+ last) */