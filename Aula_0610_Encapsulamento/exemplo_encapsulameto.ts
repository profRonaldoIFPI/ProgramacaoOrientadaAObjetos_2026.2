
class Pessoa{
    constructor(
        private _nome: string, // DADOS
        private _telefone: string,
        readonly _nascimento: Date
    ){}

    get nome(): string { // CÓDIGO
        return this._nome;
    }
    set nome(nome: string){ // faz sentido encapsular nome já que não tem validação?
        this._nome = nome;
    }
    get telefone(): string {  
        return this._telefone;
    }
    set telefone(telefone: string){
        if(telefone.length === 11){ //TODO verificar se são digitos (expressões regulares)
            this._telefone = telefone;
        } else {
            console.log(telefone + " é invalido.")
        }
    }
}

const pessoa = new Pessoa('João', '123456789', new Date('1990-01-01'));
pessoa.nome = "João Bento"; //set
console.log(pessoa.nome);   //get
pessoa.telefone = "123456789123";