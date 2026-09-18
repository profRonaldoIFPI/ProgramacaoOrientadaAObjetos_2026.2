let produtos = [
    { nome: "Teclado", categoria: "Informatica" },
    { nome: "Sabonete", categoria: "Higiene" },
    { nome: "Flocão", categoria: "Alimentos" },
    { nome: "Mouse", categoria: "Infomatica" },
    { nome: "Shampoo", categoria: "Higiene" },
    { nome: "Creme dental", categoria: "Higiene" }
];

for(let objeto of produtos){
    if(objeto.categoria==="Higiene") continue;
    console.log(objeto);
}