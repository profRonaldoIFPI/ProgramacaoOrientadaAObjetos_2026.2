/**
 * Aula 7 - Herança: Programação Orientada a Objetos com TypeScript
 * Slide 2 e 5: A Essência da Herança & A Regra de Ouro: O uso do super()
 *
 * Conceitos:
 * 1. Generalização: Extrair características comuns de várias classes para formar
 *    uma única classe base (ex: Veiculo).
 * 2. Especialização: Criar uma nova classe a partir de uma existente, adicionando
 *    detalhes e comportamentos específicos (ex: Carro, Moto).
 * 3. Regra de Ouro do super():
 *    - Construtores em subclasses EXIGEM a chamada de super().
 *    - A lógica: O molde pai deve ser construído e inicializado primeiro.
 *    - A consequência: É impossível usar 'this' na subclasse antes que super() seja invocado.
 */

// --- Classe Base (Generalização) ---
class Veiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        console.log(`[Veiculo] Construtor base inicializado: ${this.marca} ${this.modelo}`);
    }

    exibirInformacoes(): void {
        console.log(`Veículo: ${this.marca} ${this.modelo}`);
    }
}

// --- Classes Derivadas (Especialização) ---

class Carro extends Veiculo {
    numPortas: number;

    constructor(marca: string, modelo: string, numPortas: number) {
        // AVISO CRÍTICO: super() deve ser chamado antes de qualquer acesso a 'this'
        // Se tentássemos: this.numPortas = numPortas; antes de super(), o TypeScript daria erro!
        super(marca, modelo); // Constrói e inicializa a superclasse primeiro (Obrigatório!)
        
        this.numPortas = numPortas;
        console.log(`[Carro] Subclasse inicializada com ${this.numPortas} portas.`);
    }

    abrirPortaMalas(): void {
        console.log(`Porta-malas do ${this.modelo} aberto.`);
    }
}

class Moto extends Veiculo {
    cilindradas: number;

    constructor(marca: string, modelo: string, cilindradas: number) {
        super(marca, modelo); // Chamada obrigatória da fundação
        this.cilindradas = cilindradas;
        console.log(`[Moto] Subclasse inicializada com ${this.cilindradas}cc.`);
    }

    empinar(): void {
        console.log(`A moto ${this.modelo} de ${this.cilindradas}cc empinou!`);
    }
}

// --- Demonstração Prática ---
console.log("=== Exemplo 02: A Regra de Ouro do super() ===");

console.log("\nCriando uma instância de Carro:");
const meuCarro = new Carro("Toyota", "Corolla", 4);
meuCarro.exibirInformacoes(); // herdado de Veiculo
meuCarro.abrirPortaMalas();   // específico de Carro

console.log("\nCriando uma instância de Moto:");
const minhaMoto = new Moto("Honda", "CB 500F", 500);
minhaMoto.exibirInformacoes(); // herdado de Veiculo
minhaMoto.empinar();          // específico de Moto

export {};
