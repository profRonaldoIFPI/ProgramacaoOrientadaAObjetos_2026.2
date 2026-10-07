"use strict";
class Pessoa {
    _nome;
    _telefone;
    _nascimento;
    constructor(_nome, _telefone, _nascimento) {
        this._nome = _nome;
        this._telefone = _telefone;
        this._nascimento = _nascimento;
    }
    get nome() {
        return this.nome;
    }
    set nome(nome) {
        this.nome = nome;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(telefone) {
        if (telefone.length === 11) { //TODO verificar se são digitos (expressões regulares)
            this.telefone = telefone;
        }
        else {
            console.log(telefone + " é invalido.");
        }
    }
}
const pessoa = new Pessoa('João', '123456789', new Date('1990-01-01'));
pessoa.nome = "João Bento"; //set
console.log(pessoa.nome); //get
pessoa.telefone = "123456789123";
