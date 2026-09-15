function contagem() {
  saida.textContent = '';
  for(let i=1; i<11; i++){
    saida.textContent += i+' '
  }      
}
function contagem_decrescente(){
  let contador = 10;
  while(contador>=1){
    saida.textContent += contador+ " ";
    contador--;
  }
}
// 1. Captura e armazena a referência dos elementos HTML da página pelo ID
const botao = document.getElementById("execute");
const saida = document.getElementById("saida");
// 2. Adiciona um ouvinte de evento ('listener') para escutar o clique no botão
botao.addEventListener("click", () => {
  contagem();
  saida.textContent += '\n';
  contagem_decrescente();
});
