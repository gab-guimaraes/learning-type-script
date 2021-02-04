class Produto {
    constructor(public nome: string, public preco: number, public desconto: number) {

    }

    public resume(): string {
            return this.nome + ' custa R$' + this.preco  
    }
}

let prod1 = new Produto('IMac', 3000, 0)
console.log(prod1.resume())

let prod2 = new Produto('iPhone', 5000, 0)
console.log(prod2)

if (prod1.preco > 2500) {
    console.log(prod1.nome + ' esta caro')
}


