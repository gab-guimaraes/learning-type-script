class Computador {
    private _ram: number = 0

    get ram(): number {
        return this._ram
    }

    set ram(valor: number) {
        this._ram = valor
    }
}