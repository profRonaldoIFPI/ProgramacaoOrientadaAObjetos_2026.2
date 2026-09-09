//i de iteração
for (let i = 0; i <= 1000; i++) {
  // contagem progressiva
  if (i == 100) {
    break; // interrompe o for
  }
  console.log(i); //a variavel i indica o numero da iteração
}
console.log("Números primos.");
// numeros primos com continue (numero que é divisivel apenas por 1 e por ele mesmo)

for (let n = 1; n <= 1000; n++) {
  let contador = 0;
  for (let div = 1; div <= n; div++) {
    if (n % div == 0) contador++;
    if (contador > 2) break;
  }
  if (contador > 2) continue;
  console.log(n);
}

console.log("Iterando em arrays");

const frutas = ["maçã", "laranja", "uva", "pêra", "banana", "manga"];

console.log(frutas.length); //6
for (let fruta of frutas) {
  console.log("a fruta da vez é " + fruta);
}

console.log("Iterando em objetos");

const pessoa = {
  nome: "Isaac", //chave: "valor"
  telefone: "8999990077",
  matricula: "TADS2026.15",
};
for (let chave in pessoa) {
  console.log(chave + ":" + pessoa[chave]);
}
