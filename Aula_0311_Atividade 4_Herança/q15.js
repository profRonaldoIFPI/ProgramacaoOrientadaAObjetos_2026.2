"use strict";
class ContaCorrente {
    saldo;
    constructor(saldo) {
        this.saldo = saldo;
    }
    calcularTributos() {
        return this.saldo * 0.1;
    }
}
class SeguroDeVida {
    beneficio;
    constructor(beneficio) {
        this.beneficio = beneficio;
    }
    calcularTributos() {
        return this.beneficio * 0.005;
    }
}
// acumular e calcular o somatório de tributos de forma totalmente polimórfica
const tributaveis = [];
tributaveis.push(new ContaCorrente(500));
tributaveis.push(new ContaCorrente(300));
tributaveis.push(new ContaCorrente(2000));
tributaveis.push(new SeguroDeVida(15000));
tributaveis.push(new SeguroDeVida(30000));
tributaveis.push(new SeguroDeVida(100000));
console.log("Impostos individuais: ");
let totalDeImposto = 0;
tributaveis.forEach(tributavel => {
    const imposto = tributavel.calcularTributos();
    console.log("\t" + imposto.toFixed(2));
    totalDeImposto += imposto;
});
console.log("Total de impostos: " + totalDeImposto.toFixed(2)); //2 casas decimais
