/**Para evitar a duplicação de código ao criar múltiplos objetos semelhantes, utilize
uma função construtora (Function Constructor) chamada Livro com a primeira letra
maiúscula. Ela deve receber via parâmetros titulo, autor, editor e ano, atribuindo-os
ao objeto através de this. Instancie pelo menos dois livros diferentes usando o
operador new. */

//classe
function Livro(titulo, autor, editor, ano){  //CommonJS EC5
    this.titulo = titulo;
    this.autor = autor;
    this.editor = editor;
    this.ano = ano;
    this.exibirDados = function(){
        console.log(
            "Titulo:\t"+this.titulo+
            "\nAutor:\t"+this.autor
        );
    }
}
//objetos

const livro1 = new Livro(
    "Vidas Secas",
    "Graciliano Ramos",
    "Editora I dont know",
    1940
);
const livro2 = new Livro("A revolução dos bichos", "Geoge Orwel", "?", 1940);
const livro3 = new Livro("Eu Robô", "Isaac Asimov", "?", 1980);

livro1.exibirDados();
livro2.exibirDados();
livro3.exibirDados();