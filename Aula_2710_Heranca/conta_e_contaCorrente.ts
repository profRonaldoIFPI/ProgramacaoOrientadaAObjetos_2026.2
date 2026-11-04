class Conta{
    protected saldo: number = 0;
}

class ContaCorrente extends Conta{
    private limite: number = 100;
    sacar(valor: number){
        this.saldo -= valor
    }
}

const conta = new ContaCorrente();

conta.saldo = 0;