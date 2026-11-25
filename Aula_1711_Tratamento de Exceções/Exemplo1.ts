class Calculadora{
    static dividir(numerador: number, denominador: number): number{
        try {
            if(denominador===0){  //em JS '0' == 0
                throw new Error("O denominador não pode ser zero.");
            }
            let quociente: number = numerador / denominador; 
            return quociente;
        } catch(erro: any) {
            console.log(erro.message);
            return 0; 
        }
    }
}
console.log(Calculadora.dividir(10,0)); 

class Calc{ // propagando exceção
    static dividir(numerador: number, denominador: number): number{
        if(denominador===0){  //em JS '0' == 0
            throw new Error("O denominador não pode ser zero.");
        }
        let quociente: number = numerador / denominador; 
        return quociente;
    }
}

try{
    console.log(Calc.dividir(10,0)); 
} catch (e: any){
    console.log(e.message);
}

