"use strict";
class Calculadora {
    static dividir(numerador, denominador) {
        try {
            if (denominador === 0) { //em JS '0' == 0
                throw new Error("O denominador não pode ser zero.");
            }
            let quociente = numerador / denominador;
            return quociente;
        }
        catch (erro) {
            console.log(erro.message);
            return 0;
        }
    }
}
console.log(Calculadora.dividir(10, 0));
class Calc {
    static dividir(numerador, denominador) {
        if (denominador === 0) { //em JS '0' == 0
            throw new Error("O denominador não pode ser zero.");
        }
        let quociente = numerador / denominador;
        return quociente;
    }
}
try {
    console.log(Calc.dividir(10, 0));
}
catch (e) {
    console.log(e.message);
}
