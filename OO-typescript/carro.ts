class Carro {

    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    private alterarVelocidade(delta: number): number {
        return this.velocidadeAtual+ delta;
    }
}