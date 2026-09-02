/*
Crie uma função verificarNumero(n) que receba um número inteiro e exiba no console:
· Se o número é "par" ou "ímpar";
· Se o número é "positivo", "negativo" ou "zero".
 */

let num = -10;

function verificarNumero(n) {
  if (n % 2 == 0) {
    console.log(n + "é par.");
  } else {
    console.log(n + "é impar.");
  }
  // console.log(n+ (n%2==0?" é par.":" é impar."));
  if (n === 0) {
    console.log(n + " é zero.");
  } else if (n > 0) {
    console.log(n + " é  positivo.");
  } else {
    console.log(n + " é  negativo.");
  }
}
verificarNumero(num);
