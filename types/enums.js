//enums
var Marcas;
(function (Marcas) {
    Marcas[Marcas["Subaru"] = 0] = "Subaru";
    Marcas[Marcas["Mitsubishi"] = 1] = "Mitsubishi";
    Marcas[Marcas["Nissan"] = 2] = "Nissan";
    Marcas[Marcas["Honda"] = 3] = "Honda"; //3
})(Marcas || (Marcas = {}));
var myCar = Marcas.Mitsubishi;
console.log(myCar);
console.log(myCar.valueOf);
