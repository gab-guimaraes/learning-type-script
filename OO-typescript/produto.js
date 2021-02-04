var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.resume = function () {
        return this.nome + 'custa R$' + this.preco;
    };
    return Produto;
}());
var prod1 = new Produto('IMac', 3000, 0);
console.log(prod1.resume());
var prod2 = new Produto('iPhone', 5000, 0);
console.log(prod2);
if (prod1.preco > 2500) {
    console.log(prod1.nome + ' esta caro');
}
