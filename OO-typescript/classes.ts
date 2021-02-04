class Data {
    //public by default
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes:number = 1, ano:number = 1900) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    
    }
}

const aniversario = new Data(2,6,1995);
console.log(aniversario);
console.log(aniversario.dia)