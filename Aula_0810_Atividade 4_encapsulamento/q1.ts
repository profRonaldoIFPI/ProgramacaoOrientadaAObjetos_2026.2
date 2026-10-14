/*
Crie uma classe Pessoa com os atributos privados nome e idade.
 - Implemente os métodos getters e setters.
 - Crie um método apresentar() que imprime: "Olá, meu nome é <nome> e tenho <idade> anos." 
*/

class Pessoa {
    constructor(
        private _nome: string, 
        private _idade: number
    ){}
    get nome(): string{
        return this._nome;
    }
    set nome(nome: string){
        this._nome = nome;
    }
    get idade(): number {
        return this._idade;
    }
    set idade(idade: number) {
        if (idade >= 0) {
            this._idade = idade;
        } else {
            console.log("A idade não pode ser negativa.");
        }
    }
    apresentar(){
      console.log(`Olá, meu nome é ${this._nome} e tenho ${this._idade} anos.`);
    }
}
const p = new Pessoa("Pedro Lucas",20);
p.apresentar();



