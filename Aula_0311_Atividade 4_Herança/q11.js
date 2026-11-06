"use strict";
/**
 * Implemente uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(): number. Crie subclasses concretas Circulo e Retangulo. Em seguida, crie um array generalizado do tipo FiguraGeometrica[] contendo instâncias mistas de ambas as formas.
 * */
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    raio;
    PI = 3.14;
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return this.PI * this.raio * this.raio;
    }
    ;
}
class Retangulo extends FiguraGeometrica {
    base;
    altura;
    constructor(base, altura) {
        super();
        this.altura = altura;
        this.base = base;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
const formas = []; // array
formas.push(new Circulo(12));
formas.push(new Circulo(10));
formas.push(new Retangulo(10, 15));
formas.push(new Retangulo(12, 18));
console.log(formas.length);
formas.forEach(figura => {
    console.log(figura.calcularArea()); //generalização
});
