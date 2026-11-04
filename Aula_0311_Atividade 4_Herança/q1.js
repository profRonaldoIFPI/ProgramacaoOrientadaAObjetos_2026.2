"use strict";
/*
    Crie uma classe base Funcionario com os atributos protegidos nome e salarioBase, além de um método calcularSalario(): number. Em seguida, crie uma subclasse Gerente que herda de Funcionario, adiciona o atributo bonus e utiliza a palavra-chave super para sobrescrever (override) o cálculo do salário somando o bônus.
*/
class Funcionario {
    nome;
    salarioBase;
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    calcularSalario() {
        return this.salarioBase;
    }
}
class Gerente extends Funcionario {
    bonus;
    constructor(nome, salarioBase, bonus) {
        super(nome, salarioBase);
        this.bonus = bonus;
    }
    calcularSalario() {
        return this.salarioBase + this.bonus;
    }
}
const g = new Gerente("Pedro Lucas", 5000, 1200);
console.log(g.calcularSalario()); // metodo da subclasse
