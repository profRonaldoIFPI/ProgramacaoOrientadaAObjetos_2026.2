"use strict";
/**
 * Aula 7 - Herança: Programação Orientada a Objetos com TypeScript
 * Slide 6: Reaproveitando Lógica com super.metodo()
 *
 * Conceitos:
 * - O 'super' não é exclusivo do construtor. Ele atua como um ponteiro direto para a classe base.
 * - Uso: Permite invocar a versão original de um método herdado de dentro da subclasse,
 *   expandindo a lógica em vez de descartá-la ou duplicá-la.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome;
    salario;
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    // Regra base: bônus padrão de 10% do salário
    calcularBonus() {
        return this.salario * 0.10;
    }
    obterDescricao() {
        return `Funcionário: ${this.nome} | Salário Base: R$ ${this.salario.toFixed(2)}`;
    }
}
class Gerente extends Funcionario {
    departamento;
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }
    // Sobrescreve e expande calcularBonus() aproveitando a lógica da classe pai
    calcularBonus() {
        // Reaproveita a regra base (10%) e adiciona uma gratificação de liderança de R$ 500
        const bonusBase = super.calcularBonus();
        const gratificacaoLideranca = 500;
        return bonusBase + gratificacaoLideranca;
    }
    // Também expande o método de descrição aproveitando o super.obterDescricao()
    obterDescricao() {
        return `${super.obterDescricao()} | Departamento: ${this.departamento}`;
    }
}
class Diretor extends Funcionario {
    participacaoLucros;
    constructor(nome, salario, participacaoLucros) {
        super(nome, salario);
        this.participacaoLucros = participacaoLucros;
    }
    calcularBonus() {
        // Diretor recebe o dobro do bônus base de funcionário + participação nos lucros
        return (super.calcularBonus() * 2) + this.participacaoLucros;
    }
}
// --- Demonstração Prática ---
console.log("=== Exemplo 03: Reaproveitando Lógica com super.metodo() ===");
const func = new Funcionario("Ana Clara", 3000);
console.log(func.obterDescricao());
console.log(`Bônus Funcionario: R$ ${func.calcularBonus().toFixed(2)} (10% de 3000 = 300)`);
console.log("\n------------------------------------------------");
const gerente = new Gerente("Roberto Alves", 5000, "Tecnologia da Informação");
console.log(gerente.obterDescricao());
// Bônus base: 10% de 5000 = 500. Bônus Gerente: 500 + 500 (adicional) = 1000
console.log(`Bônus Gerente: R$ ${gerente.calcularBonus().toFixed(2)} (super.calcularBonus() + 500)`);
console.log("\n------------------------------------------------");
const diretor = new Diretor("Dra. Beatriz Santos", 12000, 4000);
console.log(`Bônus Diretor: R$ ${diretor.calcularBonus().toFixed(2)} ((super.calcularBonus() * 2) + 4000)`);
