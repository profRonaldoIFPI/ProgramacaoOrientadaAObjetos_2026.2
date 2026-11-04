"use strict";
/**
 * Aula 7 - Herança: Programação Orientada a Objetos com TypeScript
 * Slides 7, 8 e 9: O Dilema do Encapsulamento, Matriz de Visibilidade & protected em Ação
 *
 * Matriz de Visibilidade:
 * +-------------+-------------------+----------------------+-------------------------+
 * | Modificador | Na Própria Classe | Nas Subclasses       | Pelo Mundo Externo      |
 * +-------------+-------------------+----------------------+-------------------------+
 * | public      |       SIM         |        SIM           |          SIM            |
 * | protected   |       SIM         |        SIM           |          NÃO            |
 * | private     |       SIM         |        NÃO           |          NÃO            |
 * +-------------+-------------------+----------------------+-------------------------+
 *
 * Propósito do 'protected':
 * - Proibir o acesso de instâncias externas (mundo externo),
 *   mas garantir que subclasses possam ler e alterar o membro herdado ("Segredo de família").
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    titular; // Acesso livre em qualquer lugar
    saldo; // Acesso restrito à própria classe e às subclasses
    _chaveInterna; // Acesso EXCLUSIVO da classe Conta
    constructor(titular, saldoInicial = 0, chaveInterna = "CHAVE-SEG-99") {
        this.titular = titular;
        this.saldo = saldoInicial;
        this._chaveInterna = chaveInterna;
    }
    // Método público para consulta controlada do saldo
    consultarSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`[Conta] Depósito de R$ ${valor.toFixed(2)} efetuado.`);
        }
    }
}
class ContaCorrente extends Conta {
    limiteChequeEspecial;
    constructor(titular, saldoInicial, limiteChequeEspecial) {
        super(titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    sacar(valor) {
        // ACESSO VÁLIDO (Slide 9):
        // 'this.saldo' é protected, portanto é acessível aqui dentro da subclasse!
        const saldoDisponivel = this.saldo + this.limiteChequeEspecial;
        if (valor <= saldoDisponivel) {
            this.saldo -= valor; // PERMITIDO: alteração direta do membro protected herdado
            console.log(`[ContaCorrente] Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
            return true;
        }
        else {
            console.log(`[ContaCorrente] Saldo insuficiente para saque de R$ ${valor.toFixed(2)}.`);
            return false;
        }
        // TENTATIVA DE ACESSO A MEMBRO PRIVADO DO PAI:
        // console.log(this._chaveInterna);
        // ERRO DE COMPILAÇÃO: 'Property '_chaveInterna' is private and only accessible within class 'Conta'.'
    }
}
class ContaPoupanca extends Conta {
    renderJuros(taxaPercentual) {
        // PERMITIDO: 'saldo' é protected, acessível na subclasse
        const rendimento = this.saldo * (taxaPercentual / 100);
        this.saldo += rendimento;
        console.log(`[ContaPoupanca] Rendimento de R$ ${rendimento.toFixed(2)} aplicado.`);
    }
}
// --- Demonstração Prática ---
console.log("=== Exemplo 04: Encapsulamento e protected em Ação ===");
const minhaConta = new ContaCorrente("Lucas Silveira", 500, 200);
// 1. Acesso a membro PUBLIC (permitido externamente):
console.log(`Titular (public): ${minhaConta.titular}`);
minhaConta.titular = "Lucas Silveira Filho"; // Permitido
// 2. Acesso através de método público que utiliza membro protected internamente:
minhaConta.sacar(600); // Usa cheque especial (500 + 200 = 700 disponíveis)
console.log(`Saldo final após saque: R$ ${minhaConta.consultarSaldo().toFixed(2)}`);
// 3. TENTATIVA DE ACESSO DIRETO PELO MUNDO EXTERNO (Slide 9):
// Descomentar a linha abaixo gera erro no compilador TypeScript:
// minhaConta.saldo = 1000;
// // ERRO: A propriedade 'saldo' é protegida e só pode ser acessada
// // dentro da classe 'Conta' e de suas subclasses.
console.log("\n-> Observação: Tentativas de acessar 'minhaConta.saldo' externamente causam erro de compilação no TypeScript!");
