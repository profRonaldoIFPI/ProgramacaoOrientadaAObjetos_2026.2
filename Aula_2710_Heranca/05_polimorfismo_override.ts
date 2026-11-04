/**
 * Aula 7 - Herança: Programação Orientada a Objetos com TypeScript
 * Slides 10, 11 e 13: Mutação de Comportamento - Sobrescrita de Métodos (Override) & Polimorfismo
 *
 * Conceitos:
 * - Polimorfismo: Capacidade de objetos de diferentes classes responderem à mesma
 *   mensagem (método) com comportamentos específicos.
 * - Sobrescrita (Override):
 *   - Definição: Mudar a implementação interna de um método herdado.
 *   - A Regra: A assinatura (nome, tipos e quantidade de parâmetros, e tipo de retorno)
 *     permanece a mesma, mas o comportamento interno é substituído na classe filha.
 *   - Onde ocorre: Entre Superclasse e Subclasse (Hierarquia de herança).
 */

// Superclasse
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    // Método que será sobrescrito pelas subclasses
    mover(): void {
        console.log(`[Animal] ${this.nome}: O animal está se movendo.`);
    }

    emitirSom(): void {
        console.log(`[Animal] ${this.nome}: Som genérico de animal.`);
    }
}

// Subclasse 1: Sapo (Slide 11)
class Sapo extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    // Sobrescrita (Override): Mantém a assinatura 'mover(): void', mas altera a lógica
    mover(): void {
        console.log(`[Sapo] ${this.nome}: O sapo está pulando.`);
    }

    emitirSom(): void {
        console.log(`[Sapo] ${this.nome} coaxa: Coax coax!`);
    }
}

// Subclasse 2: Pássaro
class Passaro extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    mover(): void {
        console.log(`[Pássaro] ${this.nome}: O pássaro está voando pelo céu.`);
    }

    emitirSom(): void {
        console.log(`[Pássaro] ${this.nome} canta: Piu piu!`);
    }
}

// Subclasse 3: Peixe
class Peixe extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    mover(): void {
        console.log(`[Peixe] ${this.nome}: O peixe está nadando na água.`);
    }
}

// --- Demonstração Prática de Polimorfismo ---
console.log("=== Exemplo 05: Sobrescrita de Métodos (Override) & Polimorfismo ===");

const animalGenerico = new Animal("Criatura");
const sapoCururu = new Sapo("Cururu");
const pardal = new Passaro("Pardal");
const tubarao = new Peixe("Tubarão");

console.log("\n--- Invocação Direta de cada Objeto ---");
animalGenerico.mover();
sapoCururu.mover();
pardal.mover();
tubarao.mover();

console.log("\n--- Polimorfismo em Ação (Coleção Heterogênea de Animal) ---");
// Criamos um array tipado como a superclasse Animal[] contendo diferentes subclasses
const reinoAnimal: Animal[] = [
    animalGenerico,
    sapoCururu,
    pardal,
    tubarao
];

// O mesmo método mover() é chamado para todos, mas cada um executa seu próprio comportamento!
reinoAnimal.forEach((animal) => {
    animal.mover();
});

export {};
