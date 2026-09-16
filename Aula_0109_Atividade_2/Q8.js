function avaliarAluno(n1,n2,n3,me) {
  let ma = (2*n1 + 2*n2 + 2*n3 + me)/7; // média 
  let conceito ="Média:" +ma+ "\nConceito: ";
  if(ma >= 9){
    conceito += "A";
  } else if (ma >= 7.5){
    conceito += "B";
  } else if (ma >= 6){
    conceito += "C";
  } else if (ma >=4){
    conceito += "D";
  } else {
    conceito += "E";
  }
  if (ma >=6) {
    conceito += "\nSituação: APROVADO";
  } else {
    conceito += "\nSituação: REPROVADO";
  }
  return conceito; 
}

// 1. Captura e armazena a referência dos elementos HTML da página pelo ID
const botao = document.getElementById("execute");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const me = document.getElementById("me");
const saida = document.getElementById("saida");

// 2. Adiciona um ouvinte de evento ('listener') para escutar o clique no botão
botao.addEventListener("click", () => {
  // Obtém o valor digitado pelo usuário no campo de entrada
  let n_1 = n1.valueAsNumber;
  let n_2 = n2.valueAsNumber;
  let n_3 = n3.valueAsNumber;
  let m_e = me.valueAsNumber;

  // Chama a função verificarNumero passando o valor e exibe o retorno no elemento de saída
  saida.textContent = avaliarAluno(n_1,n_2,n_3, m_e);
});
