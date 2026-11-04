/**
 * Aula 7 - Herança: Programação Orientada a Objetos com TypeScript
 * Slide 14: O Mapa da Herança (Exemplo Integrado dos 4 Pilares)
 *
 * 1. A Estrutura (extends):
 *    A ponte que permite que a subclasse absorva o molde da superclasse.
 *
 * 2. A Fundação (super()):
 *    O chamado obrigatório no construtor que garante que o objeto pai
 *    ganhe vida e seja inicializado antes do filho.
 *
 * 3. A Segurança (protected):
 *    O guardião que oculta os dados críticos do mundo externo,
 *    mas os confia à linhagem familiar (subclasses).
 *
 * 4. A Evolução (Override / Overload):
 *    O mecanismo de mutação que permite aos objetos adaptarem seus
 *    comportamentos às novas necessidades.
 */

// ==========================================
// 1. A SUPERCLASSE (Base)
// ==========================================
class ContaBancaria {
    public titular: string;

    // [3. A SEGURANÇA]: 'protected' protege os dados do mundo exterior,
    // mas permite que classes filhas leiam e alterem o estado com segurança.
    protected saldo: number;
    protected historicoTransacoes: string[] = [];

    // [4. A EVOLUÇÃO - Overload de Construtor]:
    constructor(titular: string);
    constructor(titular: string, saldoInicial: number);
    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.adicionarHistorico(`Conta aberta com saldo inicial de R$ ${saldoInicial.toFixed(2)}`);
    }

    public consultarSaldo(): number {
        return this.saldo;
    }

    // [4. A EVOLUÇÃO - Overload de Método]:
    // Assinatura 1: Depósito simples por valor em dinheiro
    public depositar(valor: number): void;
    // Assinatura 2: Depósito com identificador/comprovante (ex: Pix ou TED)
    public depositar(valor: number, identificador: string): void;
    // Implementação real flexível:
    public depositar(valor: number, identificador?: string): void {
        if (valor <= 0) {
            console.log("[Depósito Inválido] O valor precisa ser maior que zero.");
            return;
        }

        this.saldo += valor;
        const msg = identificador
            ? `Depósito recebido [Ref: ${identificador}]: +R$ ${valor.toFixed(2)}`
            : `Depósito em dinheiro: +R$ ${valor.toFixed(2)}`;
        this.adicionarHistorico(msg);
        console.log(`[${this.titular}] ${msg}`);
    }

    // Método base para saque
    public sacar(valor: number): boolean {
        if (valor <= 0) {
            console.log("[Saque Inválido] O valor deve ser positivo.");
            return false;
        }

        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.adicionarHistorico(`Saque realizado: -R$ ${valor.toFixed(2)}`);
            console.log(`[${this.titular}] Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
            return true;
        }

        console.log(`[${this.titular}] Saldo insuficiente para saque de R$ ${valor.toFixed(2)}.`);
        return false;
    }

    protected adicionarHistorico(registro: string): void {
        this.historicoTransacoes.push(`[${new Date().toLocaleTimeString()}] ${registro}`);
    }

    public imprimirExtrato(): void {
        console.log(`\n--- Extrato Bancário: ${this.titular} ---`);
        this.historicoTransacoes.forEach(t => console.log(t));
        console.log(`Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
    }
}

// ==========================================
// 2. SUBCLASSE 1: ContaCorrente
// ==========================================
// [1. A ESTRUTURA]: 'extends' cria o vínculo evolutivo com ContaBancaria
class ContaCorrente extends ContaBancaria {
    public limiteChequeEspecial: number;
    private taxaOperacao: number = 2.50; // taxa por saque especial

    constructor(titular: string, saldoInicial: number, limiteChequeEspecial: number) {
        // [2. A FUNDAÇÃO]: super() inicializa a superclasse antes de usar 'this'
        super(titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    // [4. A EVOLUÇÃO - Override]: Modifica a regra de negócio do saque
    // permitindo uso do limite de cheque especial e cobrança de taxa quando aplicável
    public sacar(valor: number): boolean {
        const saldoDisponivel = this.saldo + this.limiteChequeEspecial;

        if (valor <= 0 || valor > saldoDisponivel) {
            console.log(`[Conta Corrente] Limite insuficiente para saque de R$ ${valor.toFixed(2)}.`);
            return false;
        }

        // Se o saldo normal cobrir, tenta reaproveitar a lógica original via super.sacar()
        if (this.saldo >= valor) {
            return super.sacar(valor); // Reaproveitamento direto com super.metodo()
        } else {
            // Entrou no cheque especial: consome o saldo restante e avança no limite
            const restante = valor - this.saldo;
            this.saldo = 0;
            this.limiteChequeEspecial -= restante;
            this.saldo -= this.taxaOperacao; // cobra a taxa

            this.adicionarHistorico(`Saque c/ Cheque Especial: R$ ${valor.toFixed(2)} (Taxa R$ ${this.taxaOperacao.toFixed(2)})`);
            console.log(`[Conta Corrente] Saque efetuado utilizando cheque especial. Taxa de R$ ${this.taxaOperacao.toFixed(2)} debitada.`);
            return true;
        }
    }
}

// ==========================================
// 3. SUBCLASSE 2: ContaInvestimento
// ==========================================
class ContaInvestimento extends ContaBancaria {
    private taxaRendimentoMensal: number;

    constructor(titular: string, saldoInicial: number, taxaRendimento: number) {
        super(titular, saldoInicial);
        this.taxaRendimentoMensal = taxaRendimento;
    }

    public aplicarRendimento(): void {
        // [3. A SEGURANÇA]: Acessando diretamente o 'saldo' protected herdado
        const lucro = this.saldo * (this.taxaRendimentoMensal / 100);
        this.saldo += lucro;
        this.adicionarHistorico(`Rendimento mensal (${this.taxaRendimentoMensal}%): +R$ ${lucro.toFixed(2)}`);
        console.log(`[Investimento] Rendimento de R$ ${lucro.toFixed(2)} creditado na conta de ${this.titular}.`);
    }

    // [4. A EVOLUÇÃO - Override]: Regra estrita: não permite saques que deixem a conta zerada
    public sacar(valor: number): boolean {
        if (this.saldo - valor < 100) {
            console.log(`[Investimento] Operação negada. Saldo mínimo de R$ 100.00 deve ser mantido.`);
            return false;
        }
        return super.sacar(valor);
    }
}

// ==========================================
// 4. DEMONSTRAÇÃO PRÁTICA POLIMÓRFICA
// ==========================================
console.log("=============================================================");
console.log("       AULA 7 - O MAPA DA HERANÇA: SISTEMA INTEGRADO         ");
console.log("=============================================================\n");

// Instanciação e Overload de Construtor
const cc = new ContaCorrente("Beatriz Lima", 1000, 500);
const ci = new ContaInvestimento("Gabriel Souza", 5000, 1.2);

console.log("--- 1. Depósitos (Demonstrando Sobrecarga/Overload) ---");
cc.depositar(300);                        // Assinatura 1
cc.depositar(1200, "PIX-DOC-883719");     // Assinatura 2

console.log("\n--- 2. Saques e Especialização (Demonstrando Override & super) ---");
cc.sacar(2000); // Excede o saldo positivo, ativando regra do cheque especial em ContaCorrente

ci.aplicarRendimento();
ci.sacar(4950); // Deve ser negado pela regra de override (mínimo de R$ 100)
ci.sacar(1500); // Permitido via super.sacar()

console.log("\n--- 3. Polimorfismo: Processamento em Lote de Contas ---");
const carteiraDeContas: ContaBancaria[] = [cc, ci];

carteiraDeContas.forEach(conta => {
    conta.imprimirExtrato();
});

export {};
