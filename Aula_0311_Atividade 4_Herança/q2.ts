/**
 * Modele uma classe Veiculo com o atributo velocidade e o método acelerar(incremento: number). Crie uma subclasse CarroEsportivo que sobrescreve o método acelerar() para incrementar a velocidade no dobro da taxa informada, utilizando super. 
 * */
class Veiculo{
    constructor(private _velocidade: number){}
    get velocidade(): number{
        return this._velocidade;
    }
    set velocidade(velocidade: number){
        this._velocidade = velocidade;
    }
    public acelerar(incremento: number): void{ //void é sem retorno
        this._velocidade += incremento;
    }
}
class CarroEsportivo extends Veiculo{
    constructor(velocidade: number){
        super(velocidade);
    }
    public acelerar(incremento: number): void {
        super.velocidade += incremento*2; //chama o set da superclasse
    }
}
const carro1 = new Veiculo(20);
console.log(carro1.velocidade); //20
carro1.acelerar(10);
console.log(carro1.velocidade); //30

const carro2 = new CarroEsportivo(20);
console.log(carro2.velocidade); //20
carro2.acelerar(10);
console.log(carro2.velocidade); //40