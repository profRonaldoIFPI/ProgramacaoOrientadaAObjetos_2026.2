/*
    Imagine que você foi contratado para desenvolver um sistema para um restaurante caseiro. O sistema precisa auxiliar os clientes a dividirem os valores da conta pelo número de pessoas na mesa.
    a) Quais dados (atributos) deveriam ser representados em um modelo/classe para representar essa comanda ou mesa?
    b) Quais operações (métodos) essenciais deveriam ser criadas para manipular esses dados?
*/

class Comanda{
    constructor(idMesa, nPessoas){
        this.idMesa = idMesa;
        this.nPessoas = nPessoas;
        this.itensConsumidos = [];
    }
    adicionarItem(descricao, valor){
        const item = {
            descricao: descricao,
            valor: valor
        }
        this.itensConsumidos.push(item)
    }
    fecharConta(){
        let total = 0;
        for(let item of this.itensConsumidos){
            total+= item.valor;
            console.log(item.descricao+"\t"+item.valor);
        }
        let valorIndividual = total/this.nPessoas;
        console.log("Total da conta: R$ "+ total +"\nValor individual: R$" + valorIndividual);
    }
}

const comanda1 = new Comanda(1, 3);

comanda1.adicionarItem("Coca cola KS", 10);
comanda1.adicionarItem("File com fritas", 45);
comanda1.adicionarItem("Cerveja Heineken", 15);
comanda1.adicionarItem("Caipirinha", 12);
comanda1.adicionarItem("Caipifruta", 18);
comanda1.adicionarItem("Pizza GG", 18);
comanda1.fecharConta();




