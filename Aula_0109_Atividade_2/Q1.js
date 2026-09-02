function verificarNumero(n) {
  let saida;
  if (n % 2 === 0) {
    saida = n + " é par.\n";
  } else {
    saida = n + " é impar.\n";
  }
  if (n === 0) {
    saida += n + " é zero.";
  } else if (n > 0) {
    saida += n + " é positivo.";
  } else {
    saida += n + " é negativo.";
  }
  return saida;
}

// 1. Captura e armazena a referência dos elementos HTML da página pelo ID
const botao = document.getElementById("execute");
const entrada = document.getElementById("entrada");
const saida = document.getElementById("saida");

// 2. Adiciona um ouvinte de evento ('listener') para escutar o clique no botão
botao.addEventListener("click", () => {
  // Obtém o valor digitado pelo usuário no campo de entrada
  let num = entrada.value;

  // Chama a função verificarNumero passando o valor e exibe o retorno no elemento de saída
  saida.textContent = verificarNumero(num);
});
