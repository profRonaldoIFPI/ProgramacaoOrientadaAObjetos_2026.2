/**
 * Aula 7 - Herança em Programação Orientada a Objetos com TypeScript
 * Exemplo 09: Herança Multinível & Operador instanceof
 *
 * Conceitos:
 * - Herança Multinível: Quando uma subclasse estende outra classe que já é subclasse de uma terceira.
 *   Hierarquia: DispositivoEletronico -> Computador -> Notebook
 * - Cadeia de Construtores: Cada nível invoca 'super()' para inicializar o nível imediatamente superior.
 * - Operador 'instanceof': Permite inspecionar em tempo de execução se um determinado objeto
 *   pertence a uma classe ou a qualquer uma de suas superclasses na árvore de herança.
 */

// Nível 1: Superclasse Raiz
class DispositivoEletronico {
    protected marca: string;
    protected ligado: boolean = false;

    constructor(marca: string) {
        this.marca = marca;
    }

    ligar(): void {
        this.ligado = true;
        console.log(`[Dispositivo] ${this.marca} foi ligado.`);
    }

    desligar(): void {
        this.ligado = false;
        console.log(`[Dispositivo] ${this.marca} foi desligado.`);
    }

    estaLigado(): boolean {
        return this.ligado;
    }

    getMarca(): string {
        return this.marca;
    }
}

// Nível 2: Subclasse Intermediária (Especialização de DispositivoEletronico)
class Computador extends DispositivoEletronico {
    protected processador: string;
    protected memoriaRAM: number; // em GB

    constructor(marca: string, processador: string, memoriaRAM: number) {
        super(marca); // Chama o construtor de DispositivoEletronico
        this.processador = processador;
        this.memoriaRAM = memoriaRAM;
    }

    executarPrograma(nomePrograma: string): void {
        if (!this.ligado) {
            console.log(`[Computador] Não é possível executar "${nomePrograma}". O computador está desligado.`);
            return;
        }
        console.log(`[Computador] Executando "${nomePrograma}" com CPU ${this.processador} e ${this.memoriaRAM}GB RAM.`);
    }
}

// Nível 3: Subclasse Folha (Especialização de Computador)
class Notebook extends Computador {
    private nivelBateria: number; // 0 a 100%
    private telaTouch: boolean;

    constructor(marca: string, processador: string, memoriaRAM: number, telaTouch: boolean = false) {
        super(marca, processador, memoriaRAM); // Chama construtor de Computador (que chama DispositivoEletronico)
        this.nivelBateria = 100;
        this.telaTouch = telaTouch;
    }

    // Sobrescrita com expansão usando super.metodo()
    ligar(): void {
        super.ligar();
        console.log(`[Notebook] Bateria em ${this.nivelBateria}%. Touch: ${this.telaTouch ? "Sim" : "Não"}.`);
    }

    usarNaBateria(horas: number): void {
        const consumo = horas * 15;
        this.nivelBateria = Math.max(0, this.nivelBateria - consumo);
        console.log(`[Notebook] Uso de ${horas}h. Bateria restante: ${this.nivelBateria}%.`);
    }
}

// Outra especialização direta de Computador (para comparar a árvore)
class ServidorRack extends Computador {
    private quantidadeDiscos: number;

    constructor(marca: string, processador: string, memoriaRAM: number, quantidadeDiscos: number) {
        super(marca, processador, memoriaRAM);
        this.quantidadeDiscos = quantidadeDiscos;
    }

    realizarBackup(): void {
        console.log(`[Servidor] Backup executado nos ${this.quantidadeDiscos} discos de armazenamento.`);
    }
}

// --- Demonstração Prática ---
console.log("=== Exemplo 09: Herança Multinível & Operador instanceof ===");

const meuNote = new Notebook("Dell", "Intel Core i7", 16, true);
const meuServidor = new ServidorRack("HP Enterprise", "AMD EPYC", 128, 8);

console.log("\n--- Comportamento Herdado ao Longo de 3 Níveis ---");
meuNote.ligar();                             // Método de Notebook (que chama super.ligar() de Dispositivo)
meuNote.executarPrograma("VS Code");        // Método herdado do nível 2 (Computador)
meuNote.usarNaBateria(2);                   // Método próprio do nível 3 (Notebook)

console.log("\n--- Inspeção de Tipos com o Operador 'instanceof' ---");
// Notebook pertence a todos os tipos de sua árvore ascendente:
console.log("meuNote instanceof Notebook:            ", meuNote instanceof Notebook);             // true
console.log("meuNote instanceof Computador:          ", meuNote instanceof Computador);           // true
console.log("meuNote instanceof DispositivoEletronico:", meuNote instanceof DispositivoEletronico); // true
console.log("meuNote instanceof Object:                ", meuNote instanceof Object);               // true

console.log("\n--- Verificando Ramos Diferentes da Hierarquia ---");
console.log("meuServidor instanceof ServidorRack:    ", meuServidor instanceof ServidorRack);     // true
console.log("meuServidor instanceof Computador:      ", meuServidor instanceof Computador);       // true
console.log("meuServidor instanceof Notebook:        ", (meuServidor as any) instanceof Notebook); // false

console.log("\n--- Polimorfismo e Type Guard com instanceof ---");
const inventario: DispositivoEletronico[] = [meuNote, meuServidor];

inventario.forEach((equipamento, index) => {
    console.log(`\nItem #${index + 1} (${equipamento.getMarca()}):`);
    
    // Type Guard usando instanceof: TypeScript faz o narrowing de tipo automaticamente!
    if (equipamento instanceof Notebook) {
        equipamento.usarNaBateria(1); // TypeScript permite chamar método específico de Notebook
    } else if (equipamento instanceof ServidorRack) {
        equipamento.realizarBackup();  // TypeScript permite chamar método específico de ServidorRack
    }
});

export {};
