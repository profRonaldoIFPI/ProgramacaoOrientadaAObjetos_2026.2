/*
Crie um objeto literal em JavaScript chamado carro utilizando chaves {}. Adicione as propriedades: nome (ex: 'Fusca'), cor (ex: 'Azul'), marca (ex: 'VW') e ano (ex: 1970). Em seguida, adicione um método chamado mostrarDados que utilize a palavra-
chave this para exibir no console todas as propriedades formatadas em uma única frase.
*/

const carro = {
    nome: "206",
    cor: "branco",
    marca: "Peugeot",
    ano: 2006,
    mostrarDados(){
        console.log(
            "Marca:\t"+ this.marca +
            "\nNome:\t"+ this.nome +
            "\nAno:\t" + this.ano +
            "\nCor:\t" + this.cor
        );
    }
}
carro.mostrarDados();