# Programação Orientada a Objetos (POO) - TADS

Repositório oficial de conteúdos, exemplos práticos, atividades e materiais da disciplina de **Programação Orientada a Objetos** do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) do **Instituto Federal do Piauí (IFPI) - Campus Floriano**.

---

## Informações da Disciplina

- **Instituição:** Instituto Federal do Piauí (IFPI) – Campus Floriano
- **Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)
- **Unidade Curricular:** 11. Programação Orientada a Objetos
- **Professor:** Prof. Ronaldo Borges ([ronaldo.pb@ifpi.edu.br](mailto:ronaldo.pb@ifpi.edu.br))
- **Módulo:** II | **Carga Horária:** 60 h/a
- **Pré-requisito:** Algoritmos e Programação

---

## 📄 Documentos Oficiais

- 📑 [Plano de Ensino 2026.2](./Plano%20de%20Ensino%202026.2.pdf)
- 📑 [PPC TADS 2023 (Ementa de POO)](./POO_PPC_TADS_2023.pdf)

---

## 📂 Estrutura do Repositório

```text
.
├── Aula_1108/                 # Introdução ao TypeScript e configuração de ambiente
├── Aula_1808_Atividade_1/     # Resoluções da Atividade Prática 1 (Exercícios 1 a 9)
├── Livros/                    # Bibliografia em PDF de apoio ao curso
├── Slides/                    # Slides das aulas em PDF
├── scripts/                   # Scripts utilitários (OCR para PDFs)
├── Plano de Ensino 2026.2.pdf # Plano de ensino da disciplina
├── POO_PPC_TADS_2023.pdf      # Projeto Pedagógico de Curso (PPC)
└── README.md                  # Este arquivo
```

---

## 🖥️ Materiais de Aula (Slides)

Os slides utilizados nas aulas expositivas estão disponíveis na pasta [`Slides/`](./Slides/):

| Aula | Título / Conteúdo | Arquivo |
| :---: | :--- | :--- |
| **Aula 0** | Apresentação da Disciplina e Metodologia | [Aula 0 - Disciplina de POO.pdf](./Slides/Aula%200%20-%20Disciplina%20de%20Programação%20Orientada%20a%20Objetos.pdf) |
| **Aula 1** | Introdução à Orientação a Objetos | [Aula 1 - Introdução à Orientada a Objetos.pdf](./Slides/Aula%201%20-%20Introdução%20à%20Orientada%20a%20Objetos.pdf) |
| **Aula 2** | Introdução ao TypeScript - Estruturas Básicas e Tipagem | [Aula 2 - Introdução à TypeScript.pdf](./Slides/Aula%202%20-%20Introdução%20à%20TypeScript%20-%20Estruturas%20Básicas%20e%20Tipagem.pdf) |

---

## 📚 Bibliografia e Livros de Apoio

Materiais de leitura complementar disponíveis na pasta [`Livros/`](./Livros/):

- 📘 [JavaScript: O Guia Definitivo](./Livros/JavaScript%20O%20Guia%20Definitivo_v2.pdf) – David Flanagan
- 📘 [Estruturas de Dados e Algoritmos com JavaScript](./Livros/Estruturas%20de%20dados%20e%20algoritmos%20com%20JavaScript%20(Loiane%20Groner)%20.pdf) – Loiane Groner
- 📘 [ECMAScript 6: Entre de Cabeça no Futuro do JavaScript](./Livros/Diego%20Martins%20de%20Pinho%20-%20Javascript%20-%20ECMAScript%206%20Entre%20de%20cabeça%20no%20futuro%20do%20JavaScript.pdf) – Diego Martins de Pinho
- 📘 [Lógica de Programação: Crie seus primeiros programas usando Javascript e HTML](./Livros/Lógica%20de%20Programação_%20Crie%20seus%20primeiros%20programas%20usando%20Javascript%20e%20HTML.pdf)

---

## 📝 Aulas e Atividades Práticas

- **[`Aula_1108/`](./Aula_1108/)**: Configuração do ambiente Node.js/TypeScript, arquivos `package.json`, `index.ts` e primeiros testes.
- **[`Aula_1808_Atividade_1/`](./Aula_1808_Atividade_1/)**: Resoluções comentadas da Atividade 1 (`e1.js`, `e2.js`, `e3.js`, `e4.js`, `e5.js`, `e6.js`, `es7.js`, `e9.js`).

---

## 🎯 Conteúdo Programático

De acordo com o [Plano de Ensino](./Plano%20de%20Ensino%202026.2.pdf), a disciplina aborda:

1. **Visão Geral e Fundamentos:** Histórico da POO, paradigmas estruturado vs. orientado a objetos, linguagens e conceitos fundamentais.
2. **TypeScript & JavaScript Moderno:** Tipos primitivos, tipagem estática, conversões, operadores, estruturas de controle e escopos.
3. **Programação Orientada a Objetos Básica:** Classes, objetos, instanciação, construtores, atributos, métodos e referências.
4. **Arrays e Organização:** Manipulação de coleções, módulos e pacotes.
5. **Encapsulamento:** Modificadores de visibilidade/acesso (`public`, `private`, `protected`), getters e setters.
6. **Herança e Polimorfismo:** Reuso de código, sobrecarga, sobrescrita de métodos e polimorfismo dinâmico.
7. **Abstração Avançada:** Classes abstratas, métodos abstratos e interfaces.
8. **Tratamento de Exceções:** Blocos `try`, `catch`, `finally` e criação de exceções personalizadas.

---

## 🚀 Como Executar os Exemplos

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [TypeScript](https://www.typescriptlang.org/) e `ts-node` instalados globalmente ou via `npx`

### Execução

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/profRonaldoIFPI/ProgramacaoOrientadaAObjetos_2026.2.git
   cd ProgramacaoOrientadaAObjetos_2026.2
   ```

2. **Executar códigos em JavaScript:**

   ```bash
   node Aula_1808_Atividade_1/e1.js
   ```

3. **Executar códigos em TypeScript:**

   ```bash
   cd Aula_1108
   npm install
   npx ts-node index.ts
   ```
