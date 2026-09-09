function solucao(opcao, quantidade) {}

// 1. Captura e armazena a referência dos elementos HTML da página pelo ID
const botao = document.getElementById("execute");
const entrada = document.getElementById("entrada");
const quantidade = document.getElementById("quantidade");
const saida = document.getElementById("saida");

// 2. Adiciona um ouvinte de evento ('listener') para escutar o clique no botão
botao.addEventListener("click", () => {
  // Obtém o valor digitado pelo usuário no campo de entrada
  let opcao = entrada.value;
  let quant = quantidade.value;

  // Chama a função verificarNumero passando o valor e exibe o retorno no elemento de saída
  saida.textContent = solucao(opcao, quant);
});
