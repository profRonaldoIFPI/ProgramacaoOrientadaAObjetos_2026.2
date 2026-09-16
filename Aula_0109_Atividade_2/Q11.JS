function gerarFibonacci(n){
    let serie = []; // array vazio
    let termoAtual = 1;
    let termoAnterior = 0;
    for(let i=0; i<n ;i++){
        let proximoTermo = termoAnterior + termoAtual;
        termoAnterior = termoAtual;
        serie.push(termoAtual); //adiciona elemento na lista (array ou vetor)
        termoAtual = proximoTermo;
    }
    return serie;
}

console.log(gerarFibonacci(20));