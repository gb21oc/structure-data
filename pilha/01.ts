class Pilha{
    private index: number = 0
    private _pilha: unknown[] = []

    push(item: string){
        this._pilha[this.index] = item
        this.index++
    }

    pop(){
        let count = 0
        const newPilha: unknown[] = []
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
        }
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
console.log(firstPilha.pilha + " => " + firstPilha.length())
const last = firstPilha.pop()
console.log(firstPilha.pilha + " => " + firstPilha.length() + " => "+ last)