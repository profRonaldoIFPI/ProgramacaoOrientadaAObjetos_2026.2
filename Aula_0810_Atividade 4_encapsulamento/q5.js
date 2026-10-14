"use strict";
/*
    Crie uma classe Funcionario com os atributos privados nome e salarioMensal.
    - Implemente os getters e setters, validando para que o salário não seja menor que o salário mínimo (R$ 1621,00 [atualizado]).
    - Crie um método salarioAnual() que retorna o salário multiplicado por 12.
    - Crie um método aumentarSalario(double percentual) que aumenta o salário
    apenas se o percentual for positivo.
*/
class Funcionario {
    _nome;
    _salarioMensal;
    static _salarioMinimo = 1621; //pertence à classe e não ao objeto
    constructor(_nome, _salarioMensal) {
        this._nome = _nome;
        this._salarioMensal = _salarioMensal;
    }
    static set salarioMinimo(valor) {
        if (valor > Funcionario._salarioMinimo) {
            Funcionario._salarioMinimo = valor;
        }
    }
    static get salarioMinimo() {
        return Funcionario._salarioMinimo;
    }
    set nome(nome) {
        if (nome.length > 0) {
            this._nome = nome;
        }
        else {
            console.log("Nome não pode ser nulo.");
        }
    }
    get nome() {
        return this._nome;
    }
    set salario(salario) {
        if (salario >= Funcionario._salarioMinimo) {
            this._salarioMensal = salario;
        }
        else {
            console.log("Salário deve ser maior ou igual ao salario mínimo[R$ " + Funcionario._salarioMinimo + "].");
        }
    }
    get salario() {
        return this._salarioMensal;
    }
    salarioAnual() {
        return this.salario * 12;
    }
    aumentarSalario(percentual) {
        if (percentual > 0) {
            this.salario = this.salario * (percentual / 100) + this.salario;
        }
        else {
            console.log("Percentual deve ser maior que zero.");
        }
    }
}
const f1 = new Funcionario("João", 3000);
console.log(f1.salarioAnual);
f1.aumentarSalario(10); //10%
console.log(f1.salario);
