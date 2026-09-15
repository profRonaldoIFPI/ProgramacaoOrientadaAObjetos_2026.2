function contargem_progressiva(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}
const regressiva = () =>{
    let contador = 10;
    while(contador>=1){
        console.log(contador);
        contador--;
    }
}

console.log("Contagem progressiva.");
contargem_progressiva();
console.log("Contagem regressiva.");
regressiva();

