/**Crie uma classe chamada Equipamento contendo:
· a) Um atributo booleano chamado ligado.
· b) Os métodos liga() e desliga(). O método liga altera o atributo para true e o
desliga para false.
· c) Um método chamado inverte(), que inverte o status atual (se ligado, desliga;
se desligado, liga).
· d) Valide os métodos liga e desliga para que não executem ações redundantes
caso o equipamento já esteja no estado desejado */

class Equiquipamento{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    liga(){
        if(!this.ligado){
            this.ligado = true;
        }
        this.status();
    }
    desliga(){
        if(this.ligado){
            this.ligado = false;
        }
        this.status();
    }
    inverte(){
        this.ligado = !this.ligado;
        this.status();
    }
    status(){
        console.log(this.nome + " está " + (this.ligado ? "ligado" : "desligado"));
    }
}

const tv = new Equiquipamento("TV");

tv.status();
tv.liga();
tv.desliga();
tv.inverte();
