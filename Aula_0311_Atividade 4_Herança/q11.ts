/**
 * Implemente uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(): number. Crie subclasses concretas Circulo e Retangulo. Em seguida, crie um array generalizado do tipo FiguraGeometrica[] contendo instâncias mistas de ambas as formas. 
 * */

abstract class FiguraGeometrica{ //superclasse
    abstract calcularArea(): number; 
}

class Circulo extends FiguraGeometrica{
    raio: number;
    private readonly PI: number = 3.14;
    constructor(raio: number){
        super();
        this.raio = raio;
    }
    override calcularArea(): number {
        return this.PI*this.raio*this.raio;
    };
}

class Retangulo extends FiguraGeometrica{
    base: number;
    altura: number;
    constructor(base: number, altura: number){
        super();
        this.altura = altura;
        this.base = base;
    }
    override calcularArea(): number {
        return this.base*this.altura;
    }
}

const formas: FiguraGeometrica[] = []; // array

formas.push(new Circulo(12));
formas.push(new Circulo(10));
formas.push(new Retangulo(10,15));
formas.push(new Retangulo(12,18));

console.log(formas.length);

formas.forEach(figura =>{
    console.log(figura.calcularArea()); //generalização
});