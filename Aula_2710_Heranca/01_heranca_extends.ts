/**
 * Aula 7 - Herança: Programação Orientada a Objetos com TypeScript
 * Slide 3 e 4: Anatomia da Hierarquia e A Ponte Estrutural (extends)
 *
 * Conceitos:
 * - Superclasse (Classe Pai/Base): Molde original com estado e comportamento compartilhados.
 * - Subclasse (Classe Filha/Derivada): Herda tudo do pai e expande suas capacidades ("é um").
 * - Palavra-chave 'extends': Estabelece o vínculo evolutivo.
 * - Absorção Silenciosa: A classe filha herda propriedades e métodos sem precisar reescrevê-los.
 */

// --- Superclasse (Classe Pai / Base) ---
class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    falar(): string {
        return `${this.nome} está falando.`;
    }
}

// --- Subclasse (Classe Filha / Derivada) ---
// Vendedor absorve automaticamente propriedades e métodos de Pessoa
class Vendedor extends Pessoa {
    totalVendas: number = 0;

    registrarVenda(valor: number): void {
        this.totalVendas += valor;
        console.log(`${this.nome} realizou uma venda de R$ ${valor.toFixed(2)}. Total acumulado: R$ ${this.totalVendas.toFixed(2)}`);
    }
}

// Outro exemplo da hierarquia (Slide 3: Animal -> Cachorro)
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dormir(): void {
        console.log(`${this.nome} está dormindo zZz...`);
    }
}

class Cachorro extends Animal {
    latir(): void {
        console.log(`${this.nome} diz: Au Au!`);
    }
}

// --- Demonstração Prática ---
console.log("=== Exemplo 01: A Ponte Estrutural (extends) ===");

// Instanciando Pessoa
const pessoa = new Pessoa("Carlos");
console.log(pessoa.falar());

// Instanciando Vendedor (Absorção Silenciosa)
const vendedor = new Vendedor("Maria");
// 'nome' e 'falar()' foram herdados de Pessoa sem precisar ser reescritos em Vendedor:
console.log(vendedor.falar());
vendedor.registrarVenda(1500);
vendedor.registrarVenda(3200);

console.log("\n--- Hierarquia Animal -> Cachorro ---");
const dog = new Cachorro("Rex");
dog.dormir(); // Método herdado da superclasse Animal
dog.latir();  // Método próprio da subclasse Cachorro

export {};
