/**
 * Aula 7 - Herança em Programação Orientada a Objetos com TypeScript
 * Exemplo 08: Classes e Métodos Abstratos (abstract class & abstract method)
 *
 * Conceitos:
 * - Classe Abstrata: Serve exclusivamente como modelo (esqueleto) para outras classes.
 *   NÃO pode ser instanciada diretamente com 'new'.
 * - Método Abstrato: Um método declarado na superclasse sem corpo (sem implementação),
 *   definindo apenas a assinatura. As subclasses concretas são OBRIGADAS a implementá-lo.
 * - Isso força uma interface/comportamento comum em todas as classes filhas.
 */

// Superclasse Abstrata: não pode ser instanciada diretamente
abstract class FormaGeometrica {
    protected cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    // Métodos abstratos: obrigatórios em qualquer subclasse concreta
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;

    // Método concreto compartilhado por todas as formas
    descrever(): void {
        console.log(`[Forma: ${this.constructor.name}] Cor: ${this.cor} | Área: ${this.calcularArea().toFixed(2)} | Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
    }

    public getCor(): string {
        return this.cor;
    }
}

// Subclasse Concreta 1: Retângulo
class Retangulo extends FormaGeometrica {
    private largura: number;
    private altura: number;

    constructor(cor: string, largura: number, altura: number) {
        super(cor); // Fundação obrigatória
        this.largura = largura;
        this.altura = altura;
    }

    // Implementação obrigatória do método abstrato
    calcularArea(): number {
        return this.largura * this.altura;
    }

    // Implementação obrigatória do método abstrato
    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

// Subclasse Concreta 2: Círculo
class Circulo extends FormaGeometrica {
    private raio: number;

    constructor(cor: string, raio: number) {
        super(cor);
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * (this.raio ** 2);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

// Subclasse Concreta 3: Triângulo Equilátero
class TrianguloEquilatero extends FormaGeometrica {
    private lado: number;

    constructor(cor: string, lado: number) {
        super(cor);
        this.lado = lado;
    }

    calcularArea(): number {
        // Área = (lado² * √3) / 4
        return (this.lado ** 2 * Math.sqrt(3)) / 4;
    }

    calcularPerimetro(): number {
        return 3 * this.lado;
    }
}

// --- Demonstração Prática ---
console.log("=== Exemplo 08: Classes e Métodos Abstratos ===");

// 1. TENTATIVA DE INSTANCIAR CLASSE ABSTRATA:
// const forma = new FormaGeometrica("Azul"); 
// // ERRO DE COMPILAÇÃO: Cannot create an instance of an abstract class.

// 2. Instanciando as subclasses concretas:
const retangulo = new Retangulo("Azul", 10, 5);
const circulo = new Circulo("Vermelho", 7);
const triangulo = new TrianguloEquilatero("Verde", 6);

// 3. Polimorfismo com Coleção de Classes Abstratas:
// Todas as formas herdam o tipo base 'FormaGeometrica'
const formas: FormaGeometrica[] = [retangulo, circulo, triangulo];

console.log("\nProcessando lista polimórfica de formas geométricas:");
let areaTotal = 0;

for (const f of formas) {
    f.descrever(); // Executa o método concreto com a área calculada especificamente
    areaTotal += f.calcularArea();
}

console.log(`\nÁrea total acumulada das formas: ${areaTotal.toFixed(2)}`);

export {};
