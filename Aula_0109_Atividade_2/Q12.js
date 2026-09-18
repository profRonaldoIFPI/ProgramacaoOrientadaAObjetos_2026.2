function buscarElemento(array, termo){
    let indice = 0;
    for(let item of array){
        if(item === termo){
            break;  
        }
        indice++;
    }
    if(indice > array.length){
        return "Item não existe";
    }
    return indice;
}

const lista = ["Ronaldo", "Isaac", "Ana Rita", "Pedro Lucas"];

console.log(buscarElemento(lista, "Isaac"));
