### Questão 1 — Eliminando `if/else` com exceções
Supondo que o método `consultar(numero: string): Conta` da classe `Banco` já lança uma `AplicacaoError` caso a conta não seja encontrada, refatore os métodos `creditar`, `sacar`, `transferir` e `renderJuros` removendo os blocos `if (procurada != null) ... else ...`.

**Exemplo de refatoração em TypeScript:**
```ts
// Antes (com verificação manual de nulidade)
public x(numero: string): void {
  const procurada = this.consultar(numero);
  if (procurada !== null) {
    procurada.metodoY();
  } else {
    console.log("Conta não encontrada");
  }
}

// Depois (delegando o fluxo de erro à exceção lançada por consultar)
public x(numero: string): void {
  const procurada = this.consultar(numero);
  procurada.metodoY();
}
```

### Questão 2 — Validação de limite de contas
Adicione na classe `Banco` um atributo `private limiteContas: number` inicializado no construtor. No método de inserção (ou na validação de capacidade), lance uma `AplicacaoError` com a mensagem `"Limite de contas excedido."` caso o número máximo de contas já tenha sido atingido.

### Questão 3 — Validação de crédito e inicialização no construtor
Altere a classe `Conta` para que o método `creditar(valor: number): void` lance uma `AplicacaoError` informando `"Valor inválido"` sempre que `valor <= 0`. Altere também o `constructor` da classe `Conta` para que o saldo inicial seja atribuído chamando `this.creditar(saldoInicial)`.

### Questão 4 — Validação de saque
Altere o método `sacar(valor: number): void` da classe `Conta` para que:
* Lance `AplicacaoError` caso `valor <= 0`;
* Lance `AplicacaoError` caso o saldo seja insuficiente (`valor > this.saldo`);
* Retire retornos `boolean` e estruturas `if/else` desnecessárias.

### Questão 5 — Refatoração para evitar duplicação (`validarValor`)
Observe que a verificação `valor <= 0` se repete em `sacar` e `creditar`. Refatore a classe `Conta` criando um método privado `private validarValor(valor: number): void` responsável por lançar a exceção quando o valor for menor ou igual a zero. Atualize `sacar` e `creditar` para utilizarem esse método.

### Questão 6 — Impacto no método `transferir`
Após a alteração da questão anterior, o método `transferir(contaDestino: Conta, valor: number): void` também passa a estar validado (assumindo que ele chama `this.sacar(valor)` e `contaDestino.creditar(valor)`)? Por quê? A solução ficou mais robusta? Justifique.

### Questão 7 — Validação de tipo com `instanceof` em `renderJuros`
Altere o método `renderJuros(numero: string): void` da classe `Banco` para que lance uma `AplicacaoError` caso a conta retornada por `consultar(numero)` não seja uma instância de `Poupanca` (`!(conta instanceof Poupanca)`). Remova o bloco `else` desnecessário.

### Questão 8 — Exceções Checadas vs. Não Checadas (Comparativo Java $\times$ TypeScript)
No Java, existe a diferença entre exceções checadas (`extends Exception`, que exigem `try/catch` ou `throws` em tempo de compilação) e não checadas (`extends RuntimeException`).
* Pesquise os prós e contras de cada abordagem.
* Explique por que o **TypeScript** adotou o modelo em que todas as exceções são não checadas e como documentar ou modelar erros previsíveis em TypeScript (por exemplo, usando JSDoc `@throws` ou *Result types* / *union types*).

### Questão 9 — Captura de múltiplos tipos de exceção e bloco `finally`
Proponha um exemplo em TypeScript que capture dois tipos distintos de erro personalizado (`TipoExcecao1Error` e `TipoExcecao2Error`) e contenha um bloco `finally`, seguindo o padrão idiomático da linguagem:

```ts
try {
  // executa até a linha onde ocorrer a exceção
} catch (ex: unknown) {
  if (ex instanceof TipoExcecao1Error) {
    // executa somente se ocorrer TipoExcecao1Error
  } else if (ex instanceof TipoExcecao2Error) {
    // executa somente se ocorrer TipoExcecao2Error
  } else {
    throw ex; // relança erros inesperados
  }
} finally {
  // executa sempre, ocorrendo exceção ou não
}
```

### Questão 10 — Ordem de verificação na herança de exceções
No exemplo da questão anterior, caso `TipoExcecao2Error extends TipoExcecao1Error`, o que ocorrerá ao executar o bloco `catch` com `TipoExcecao1Error` testado antes de `TipoExcecao2Error`? Como corrigir a ordem?

### Questão 11 — Rastreamento de `try/catch` aninhado
Descreva e justifique qual será a saída no console após a execução do código TypeScript abaixo (adaptado do original em Java):

```ts
let saida = "";

try {
  throw new Error("Erro externo");
} catch (e: unknown) {
  try {
    throw new Error("Erro interno");
  } catch (e2: unknown) {
    saida += "A";
  }
  saida += "B";
}
saida += "C";

console.log(saida);
```

### Questão 12 — Questões conceituais sobre tratamento de erros
1. Comente os pontos falhos das alternativas tradicionais de controle de erros sem exceções (ex.: ignorar o erro, retornar códigos especiais como `-1`/`false`/`null`, ou exibir mensagens diretamente com `console.log` dentro das classes de negócio).
2. Por que o uso de exceções torna o código mais confiável e desacoplado da interface com o usuário?
3. Você concorda que muitos `if/else` de verificação desaparecem quando se utilizam exceções? Dê um exemplo em TypeScript.

---

## 3. Atividade Extra — Validação com Exceções (`Monitor` e `Horario`)

*Adaptado da Prova de Seleção de Monitoria de POO (2019.1 — IFPI Campus Floriano).*

Observe o código adaptado para TypeScript abaixo:

```ts
class Horario {
  public hora: number = 0;
  public min: number = 0;
  public dia: string;

  constructor(hora: number, min: number, dia: string) {
    this.dia = dia;
    this.setHora(hora);
    this.setMin(min);
  }

  public setHora(hora: number): void {
    if (hora >= 0 && hora <= 23) {
      this.hora = hora;
    } else {
      throw new Error(`Hora inválida: ${hora}`);
    }
  }

  public setMin(min: number): void {
    if (min >= 0 && min <= 59) {
      this.min = min;
    } else {
      throw new Error(`Minuto inválido: ${min}`);
    }
  }
}

class Monitor {
  private localAtendimento: string;
  private horarioAtendimento: Horario;

  constructor(localAtendimento: string, dia: string, hora: number, min: number) {
    this.localAtendimento = localAtendimento;
    this.horarioAtendimento = new Horario(hora, min, dia);
  }

  public getHorarioAtendimento(): string {
    return `${this.horarioAtendimento.dia}: ${this.horarioAtendimento.hora}:${this.horarioAtendimento.min}`;
  }

  public setHorarioAtendimento(hora: number, min: number): void {
    this.horarioAtendimento.setHora(hora);
    this.horarioAtendimento.setMin(min);
  }
}
```

**Responda:**
1. Ao chamar o método `setHora(35)` em um objeto da classe `Horario`, qual comportamento será apresentado?
2. Considere o trecho de execução abaixo:
   ```ts
   const poo = new Monitor("Lab Info", "Quarta", 8, 40);
   poo.setHorarioAtendimento(25, 65);
   console.log("HORÁRIO DE ATENDIMENTO: " + poo.getHorarioAtendimento());
   ```
   * A linha do `console.log` será executada? Justifique.
   * Reescreva o trecho acima utilizando `try / catch` para tratar a exceção de forma amigável sem interromper abruptamente o programa.

