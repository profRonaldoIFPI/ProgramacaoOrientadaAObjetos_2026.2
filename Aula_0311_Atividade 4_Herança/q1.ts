/*
    Crie uma classe base Funcionario com os atributos protegidos nome e salarioBase, além de um método calcularSalario(): number. Em seguida, crie uma subclasse Gerente que herda de Funcionario, adiciona o atributo bonus e utiliza a palavra-chave super para sobrescrever (override) o cálculo do salário somando o bônus. 
*/
class Funcionario{
    constructor(protected nome: string, protected salarioBase: number){}
    public calcularSalario(): number{
        return this.salarioBase;
    }
}
class Gerente extends Funcionario{
    constructor(nome: string, salarioBase: number, private bonus: number){
        super(nome, salarioBase);
    }
    public calcularSalario(): number { //override (sobrescrita ou reescrita)
        return this.salarioBase + this.bonus;
    }
}
const g = new Gerente("Pedro Lucas", 5000, 1200);
console.log(g.calcularSalario()); // metodo da subclasse

