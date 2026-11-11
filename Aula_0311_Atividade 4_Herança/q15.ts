/**
 *
 Modele uma interface Tributavel com o método calculaTributos(): number. Crie classes como ContaCorrente e SeguroDeVida que realizam essa implementação. Desenvolva uma classe AuditoriaInterna capaz de acumular e calcular o somatório de tributos de forma totalmente polimórfica. 

 */
interface Tributavel{           //semelhante a classe abstrata
    calcularTributos(): number; //abstrato por definição, logo "abstract" fica implicito.
}
 class ContaCorrente implements Tributavel{
    constructor(private saldo: number){
    }
    calcularTributos(): number{
        return this.saldo * 0.1;
    }
 }
 class SeguroDeVida implements Tributavel{
    constructor(private beneficio: number){}
    calcularTributos(): number {
        return this.beneficio * 0.005;
    }
 }

// acumular e calcular o somatório de tributos de forma totalmente polimórfica

const tributaveis: Tributavel[] = [];

tributaveis.push(new ContaCorrente(500));
tributaveis.push(new ContaCorrente(300));
tributaveis.push(new ContaCorrente(2000));
tributaveis.push(new SeguroDeVida(15000));
tributaveis.push(new SeguroDeVida(30000));
tributaveis.push(new SeguroDeVida(100000));
console.log("Impostos individuais: ")
let totalDeImposto = 0;
tributaveis.forEach(tributavel =>{
    const imposto = tributavel.calcularTributos();
    console.log("\t"+imposto.toFixed(2));
    totalDeImposto += imposto;
});

console.log("Total de impostos: "+totalDeImposto.toFixed(2)); //2 casas decimais