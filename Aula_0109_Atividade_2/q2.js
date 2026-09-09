function solucao(idade) {
  if (idade < 2) {
    return "Bebê";
  } else if (idade >= 2 && idade < 12) {
    return "Criança";
  } else if (idade >= 12 && idade < 22) {
    return "Adolescente";
  } else if (idade >= 23 && idade < 69) {
    return "Adulto";
  } else {
    return "Idoso";
  }
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
  saida.textContent = solucao(num);
});
