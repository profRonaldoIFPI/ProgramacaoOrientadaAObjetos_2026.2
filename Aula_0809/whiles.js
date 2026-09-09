// escrever de 1 a 1000
let contador = 0;
while (contador <= 1000) {
  console.log(contador++); // imprime 0
  //console.log(++contador); // imprime 1
}
console.log("agora é o 'do..while'");
do {
  console.log(contador); // executa mesmo que a expressão booleana seja falsa.
} while (contador <= 1000);
