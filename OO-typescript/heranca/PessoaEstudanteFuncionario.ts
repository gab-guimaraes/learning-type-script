class Pessoa {
    nome: string
    constructor(oNome:string) {
        this.nome = oNome
    }

}

class Estudante extends Pessoa {
    disciplina: string

    constructor(oNome: string, aDisciplina:string) {
        super(oNome)
        this.disciplina = aDisciplina;
    }

}

class Funcionario extends Pessoa {
    salario: number

    constructor(oNome: string, oSalario:number) {
        super(oNome)
        this.salario = oSalario
    }
}

