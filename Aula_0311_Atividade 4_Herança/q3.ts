/**Crie uma classe abstrata Animal com o atributo protegido nome e o método abstrato falar(): string. Implemente duas subclasses concretas, Cachorro e Gato, que sobrescrevem o método falar() retornando sons específicos para cada animal. */
x
abstract class Animal{ //é uma classe que não pode "gerar" objetos
    constructor(protected nome: string){}
    public abstract falar(): string; //não possui corpo
}
class Cachorro extends Animal{
    constructor(nome: string){
        super(nome);
    }
    public override falar(): string {
        return "Au au!";
    }
}   
const doguinho = new Cachorro("Poodim"); //Poodle com cor de pudim
console.log(doguinho.falar());