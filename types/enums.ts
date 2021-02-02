//enums

enum Marcas {
    Subaru,     //0
    Mitsubishi, //1
    Nissan,     //2
    Honda       //3
}

let myCar = Marcas.Mitsubishi
console.log(myCar)

let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: '2019'}
console.log(carro)

