// =====================================================================
// Atividade 6 — Versão INICIAL (sem tratamento de exceções)
//
// Este código controla erros do jeito "tradicional": retornando
// boolean/null e exibindo mensagens com console.log dentro das classes
// de negócio. Sua tarefa é refatorá-lo conforme as questões 1 a 7 do
// enunciado, usando exceções personalizadas (AplicacaoError e derivadas).
// =====================================================================

// Classes de domínio
export class Conta {
  private _numero: string;
  private _saldo: number;

  constructor(numero: string, saldoInicial: number) {
    this._numero = numero;
    this._saldo = saldoInicial;
  }

  public get numero(): string {
    return this._numero;
  }

  public get saldo(): number {
    return this._saldo;
  }

  public creditar(valor: number): boolean {
    if (valor <= 0) {
      console.log("Valor inválido");
      return false;
    } else {
      this._saldo += valor;
      return true;
    }
  }

  public sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log("Valor inválido");
      return false;
    } else if (valor > this._saldo) {
      console.log("Saldo insuficiente");
      return false;
    } else {
      this._saldo -= valor;
      return true;
    }
  }

  public transferir(contaDestino: Conta, valor: number): void {
    this.sacar(valor);
    contaDestino.creditar(valor);
  }
}

export class Poupanca extends Conta {
  private _taxaJuros: number;

  constructor(numero: string, saldoInicial: number, taxaJuros: number) {
    super(numero, saldoInicial);
    this._taxaJuros = taxaJuros;
  }

  public renderJuros(): void {
    const juros = this.saldo * (this._taxaJuros / 100);
    this.creditar(juros);
  }
}

export class Banco {
  private contas: Conta[] = [];

  public inserir(conta: Conta): void {
    this.contas.push(conta);
  }

  public consultar(numero: string): Conta | null {
    const conta = this.contas.find((c) => c.numero === numero);
    if (conta) {
      return conta;
    } else {
      return null;
    }
  }

  public creditar(numero: string, valor: number): void {
    const procurada = this.consultar(numero);
    if (procurada !== null) {
      procurada.creditar(valor);
    } else {
      console.log("Conta não encontrada");
    }
  }

  public sacar(numero: string, valor: number): void {
    const procurada = this.consultar(numero);
    if (procurada !== null) {
      procurada.sacar(valor);
    } else {
      console.log("Conta não encontrada");
    }
  }

  public transferir(numOrigem: string, numDestino: string, valor: number): void {
    const origem = this.consultar(numOrigem);
    const destino = this.consultar(numDestino);
    if (origem !== null && destino !== null) {
      origem.transferir(destino, valor);
    } else {
      console.log("Conta não encontrada");
    }
  }

  public renderJuros(numero: string): void {
    const conta = this.consultar(numero);
    if (conta !== null) {
      if (conta instanceof Poupanca) {
        conta.renderJuros();
      } else {
        console.log("A conta não é uma poupança");
      }
    } else {
      console.log("Conta não encontrada");
    }
  }
}

// Exemplo de teste (Questão 9: após a refatoração, use try / catch / finally)
const banco = new Banco();
banco.inserir(new Conta("001", 500));
banco.inserir(new Poupanca("002", 1000, 1.5));

banco.renderJuros("002");
console.log("Saldo poupança após juros:", banco.consultar("002")?.saldo);

banco.sacar("001", 800); // Saldo insuficiente
console.log("Finalizando operação bancária.");
