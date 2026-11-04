# Aula 7: Herança em TypeScript

Este diretório contém os exemplos práticos desenvolvidos para a **Aula 7: Herança** da disciplina de **Programação Orientada a Objetos** (IFPI Campus Floriano - Prof. Ronaldo Borges), baseados integralmente nos slides da aula (`Slides/Aula 7 - Herança.pdf`).

---

## 🗺️ O Mapa da Herança (Visão Geral)

A herança em Orientação a Objetos é estruturada sobre quatro pilares fundamentais:

```
                  +--------------------------------+
                  |         SUPERCLASSE            |
                  |        (Classe Pai)            |
                  +--------------------------------+
                                  ▲
                         extends  │  super()
                                  │
                  +--------------------------------+
                  |          SUBCLASSE             |
                  |        (Classe Filha)          |
                  +--------------------------------+
                      ├── protected (Segurança)
                      └── Override / Overload (Evolução)
```

1. **A Estrutura (`extends`)**: A ponte que permite que a subclasse absorva o molde e os membros da superclasse.
2. **A Fundação (`super()`)**: O chamado obrigatório que garante que o objeto pai ganhe vida antes do filho.
3. **A Segurança (`protected`)**: O guardião que oculta os dados do mundo exterior, mas os confia à linhagem familiar.
4. **A Evolução (`Override` / `Overload`)**: O mecanismo de mutação que permite aos objetos adaptarem seus comportamentos às novas necessidades.

---

## 📂 Arquivos e Mapeamento dos Slides

| Arquivo | Slides | Conceitos Abordados | Classes Envolvidas |
| :--- | :--- | :--- | :--- |
| [`01_heranca_extends.ts`](01_heranca_extends.ts) | 3 e 4 | Anatomia da hierarquia (`Superclasse` e `Subclasse`), palavra-chave `extends`, absorção silenciosa de métodos e atributos. | `Pessoa`, `Vendedor`, `Animal`, `Cachorro` |
| [`02_construtor_super.ts`](02_construtor_super.ts) | 2 e 5 | Generalização e especialização. A regra de ouro do `super()`: obrigatório no construtor derivado antes de acessar `this`. | `Veiculo`, `Carro`, `Moto` |
| [`03_super_metodo.ts`](03_super_metodo.ts) | 6 | Reuso de lógica com `super.metodo()`, invocando e expandindo o comportamento original da superclasse. | `Funcionario`, `Gerente`, `Diretor` |
| [`04_modificadores_protected.ts`](04_modificadores_protected.ts) | 7, 8 e 9 | O dilema do encapsulamento, Matriz de Visibilidade (`public`, `protected`, `private`) e `protected` em ação. | `Conta`, `ContaCorrente`, `ContaPoupanca` |
| [`05_polimorfismo_override.ts`](05_polimorfismo_override.ts) | 10, 11 e 13 | Polimorfismo e Sobrescrita de Métodos (`Override`): mesma assinatura, implementação interna especializada. | `Animal`, `Sapo`, `Passaro`, `Peixe` |
| [`06_sobrecarga_overload.ts`](06_sobrecarga_overload.ts) | 10, 12 e 13 | Sobrecarga de Métodos e Construtores (`Overload`): múltiplas assinaturas teóricas e uma única implementação real flexível em TypeScript. | `Livro` |
| [`07_mapa_heranca_integrado.ts`](07_mapa_heranca_integrado.ts) | 14 | Exemplo completo integrando os 4 pilares do Mapa da Herança em um domínio financeiro/bancário. | `ContaBancaria`, `ContaCorrente`, `ContaInvestimento` |
| [`08_classes_abstratas.ts`](08_classes_abstratas.ts) | Avançado | Classes e métodos abstratos (`abstract class` & `abstract method`), impedindo instanciação direta e forçando implementação de contratos nas subclasses. | `FormaGeometrica`, `Retangulo`, `Circulo`, `TrianguloEquilatero` |
| [`09_heranca_multinivel_instanceof.ts`](09_heranca_multinivel_instanceof.ts) | Avançado | Herança multinível em 3 camadas, propagação de construtores via `super()`, operador `instanceof` e *Type Guards* em tempo de execução. | `DispositivoEletronico`, `Computador`, `Notebook`, `ServidorRack` |
| [`10_sistema_notificacoes.ts`](10_sistema_notificacoes.ts) | Aplicação Real | Arquitetura polimórfica multicanal de notificações com superclasse abstrata e fila de processamento em lote. | `Notificacao`, `NotificacaoEmail`, `NotificacaoSMS`, `NotificacaoPush`, `CentralDeNotificacoes` |
| [`11_heranca_vs_composicao.ts`](11_heranca_vs_composicao.ts) | Boas Práticas | Comparativo de design em POO: Herança (*é um*) versus Composição (*tem um*). Como combinar composição flexível com herança especializada. | `IMotor`, `MotorCombustao`, `MotorEletrico`, `Carro`, `CarroEletrico` |

---

## 📊 Matrizes de Apoio Conceitual

### 1. Matriz de Visibilidade (Slides 7, 8 e 9)

| Modificador | Acesso na Própria Classe | Acesso nas Subclasses | Acesso pelo Mundo Externo |
| :--- | :---: | :---: | :---: |
| `public` |  |  |  |
| `protected` |  |  | ❌ |
| `private` |  | ❌ | ❌ |

> **Propósito do `protected`:** Proibir o acesso direto por instâncias do mundo exterior, mas permitir que classes filhas leiam e alterem o membro herdado (*"segredo de família"*).

---

### 2. Matriz de Diagnóstico: Override vs. Overload (Slide 13)

| Critério | Override (Sobrescrita) | Overload (Sobrecarga) |
| :--- | :--- | :--- |
| **Onde ocorre?** | Entre Superclasse e Subclasse (Hierarquia) | Na mesma classe (ou cadeia de herança) |
| **Assinatura** | **Exatamente a mesma** (mesmos parâmetros e tipos) | **Deve ser diferente** (quantidade ou tipos de parâmetros) |
| **Propósito principal** | Especializar ou substituir um comportamento genérico herdado | Oferecer flexibilidade de argumentos para a mesma ação |

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado (v18+ ou v22+)
- TypeScript (`tsc`)

### Compilando os arquivos TypeScript:
```bash
tsc --target ES2022 --module commonjs *.ts
```

### Executando com Node.js:
```bash
node 01_heranca_extends.js
node 02_construtor_super.js
node 03_super_metodo.js
node 04_modificadores_protected.js
node 05_polimorfismo_override.js
node 06_sobrecarga_overload.js
node 07_mapa_heranca_integrado.js
node 08_classes_abstratas.js
node 09_heranca_multinivel_instanceof.js
node 10_sistema_notificacoes.js
node 11_heranca_vs_composicao.js
```
