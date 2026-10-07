/*
Com base em um objeto literal produto que contenha código, descrição, valor e
quantidade, implemente métodos internos utilizando a notação de ponto e de
colchetes para:
 a) Reduzir a quantidade disponível (método baixar).
 b) Incrementar a quantidade disponível (método repor)
*/

const produto = {
    codigo: 1,
    descricao: "teclado gammer mecanico",
    valor: 180.5,
    quantidade: 2,
    baixar(quantidade){
        if(quantidade<0){
            console.log("A quantidade a baixar deve ser positiva.");
        } else if(this.quantidade>=quantidade){
            this.quantidade -= quantidade;
        }else{
            console.log("Estoque insuficiente.");
        }
    },
    repor(quantidade){
        if(quantidade<0){
            console.log("A quantidade a repor deve ser positiva.")
        }else {
            this.quantidade += quantidade;
        }
    }
}
//testando o objeto
console.log("Quantidade "+produto.quantidade);
produto.baixar(3);
produto.baixar(-1);
produto.baixar(1);
console.log("Quantidade "+produto.quantidade);
produto.repor(-2);
produto.repor(2);
console.log("Quantidade "+produto.quantidade);
