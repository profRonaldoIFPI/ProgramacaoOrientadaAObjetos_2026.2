"use strict";
/**
 * Aula 7 - Herança: Programação Orientada a Objetos com TypeScript
 * Slides 10, 12 e 13: Sobrecarga de Métodos (Overload) & Matriz de Diagnóstico
 *
 * Conceito:
 * - Sobrecarga (Overload): O mesmo método ou construtor oferecendo múltiplas
 *   assinaturas de parâmetros (variando em quantidade ou tipos).
 * - Peculiaridade do TypeScript:
 *   Como o JavaScript subjacente não suporta múltiplas funções com mesmo nome,
 *   no TypeScript nós declaramos:
 *     1. Múltiplas assinaturas de cabeçalho (tipagem em tempo de compilação).
 *     2. Uma ÚNICA implementação real flexível que trata as variações dos parâmetros.
 *
 * Matriz de Diagnóstico (Slide 13):
 * +--------------------+------------------------------------+---------------------------------------+
 * | Critério           | Override (Sobrescrita)             | Overload (Sobrecarga)                 |
 * +--------------------+------------------------------------+---------------------------------------+
 * | Onde ocorre?       | Entre Superclasse e Subclasse      | Na mesma classe (ou cadeia)           |
 * | Assinatura         | Exatamente a mesma (mesmos tipos)  | Deve ser diferente (quantidade/tipos) |
 * | Propósito principal| Especializar/substituir o pai      | Oferecer flexibilidade de argumentos  |
 * +--------------------+------------------------------------+---------------------------------------+
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    titulo;
    autor;
    ano;
    // --- Única Implementação Real Flexível ---
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor ?? "Autor Desconhecido/Anônimo";
        this.ano = ano;
    }
    // --- Única Implementação Real do Método ---
    emprestar(leitor, prazoOuData) {
        if (prazoOuData === undefined) {
            console.log(`[Empréstimo] "${this.titulo}" emprestado para ${leitor} por 7 dias (padrão).`);
        }
        else if (typeof prazoOuData === "number") {
            console.log(`[Empréstimo] "${this.titulo}" emprestado para ${leitor} pelo período especial de ${prazoOuData} dias.`);
        }
        else if (prazoOuData instanceof Date) {
            console.log(`[Empréstimo] "${this.titulo}" emprestado para ${leitor}. Devolução fixada para: ${prazoOuData.toLocaleDateString("pt-BR")}.`);
        }
    }
    exibirDados() {
        const infoAno = this.ano ? ` (${this.ano})` : "";
        console.log(`Livro: "${this.titulo}" | Autor: ${this.autor}${infoAno}`);
    }
}
// --- Demonstração Prática ---
console.log("=== Exemplo 06: Sobrecarga de Métodos e Construtores (Overload) ===");
console.log("\n--- Instanciando com diferentes assinaturas do construtor ---");
// Chamando construtor com 1 parâmetro (Assinatura 1)
const livro1 = new Livro("A Arte da Guerra");
livro1.exibirDados();
// Chamando construtor com 2 parâmetros (Assinatura 2)
const livro2 = new Livro("Dom Casmurro", "Machado de Assis");
livro2.exibirDados();
// Chamando construtor com 3 parâmetros (Assinatura 3)
const livro3 = new Livro("Clean Code", "Robert C. Martin", 2008);
livro3.exibirDados();
console.log("\n--- Chamando o método emprestar() sobrecarregado ---");
// Invocação com 1 parâmetro:
livro1.emprestar("Lucas");
// Invocação com 2 parâmetros (número de dias):
livro2.emprestar("Mariana", 15);
// Invocação com 2 parâmetros (objeto Date):
const dataEntrega = new Date();
dataEntrega.setDate(dataEntrega.getDate() + 30);
livro3.emprestar("Prof. Ronaldo", dataEntrega);
