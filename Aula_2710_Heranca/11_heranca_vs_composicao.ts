/**
 * Aula 7 - Herança em Programação Orientada a Objetos com TypeScript
 * Exemplo 11: Herança vs. Composição (Boas Práticas de Design em POO)
 *
 * Princípio Fundamental:
 * - Herança representa uma relação de: "É UM" (is-a).
 *   Exemplo: Um CarroElétrico É UM Carro. Um Gerente É UM Funcionário.
 * - Composição representa uma relação de: "TEM UM" (has-a).
 *   Exemplo: Um Carro TEM UM Motor. Uma Pessoa TEM UM Endereço.
 *
 * Regra de Ouro da POO:
 * "Prefira composição a herança quando a relação for estrutural (posse/associação)
 * e use herança quando houver uma verdadeira especialização de comportamento."
 */

// ==========================================
// 1. COMPONENTES PARA COMPOSIÇÃO ("TEM UM")
// ==========================================

interface IMotor {
    ligar(): void;
    acelerar(potencia: number): void;
    desligar(): void;
    getTipo(): string;
}

class MotorCombustao implements IMotor {
    constructor(private cilindradas: number) {}

    ligar(): void {
        console.log(`[Motor Combustão ${this.cilindradas}L] Arranque elétrico acionado. Motor ligado.`);
    }

    acelerar(potencia: number): void {
        console.log(`[Motor Combustão] Injeção de combustível aumentada para ${potencia}%. Vrum vrum!`);
    }

    desligar(): void {
        console.log(`[Motor Combustão] Ignição desligada.`);
    }

    getTipo(): string {
        return `Combustão ${this.cilindradas}L`;
    }
}

class MotorEletrico implements IMotor {
    constructor(private potenciaKw: number) {}

    ligar(): void {
        console.log(`[Motor Elétrico ${this.potenciaKw}kW] Inversor ativado. Silencioso e pronto.`);
    }

    acelerar(potencia: number): void {
        console.log(`[Motor Elétrico] Torque instantâneo a ${potencia}% de potência.`);
    }

    desligar(): void {
        console.log(`[Motor Elétrico] Inversor desativado.`);
    }

    getTipo(): string {
        return `Elétrico ${this.potenciaKw}kW`;
    }
}

// ==========================================
// 2. HERANÇA: Carro (Base) e CarroEletrico (Especialização)
// ==========================================

// Superclasse: Utiliza COMPOSIÇÃO para o motor (Carro TEM UM Motor)
class Carro {
    protected modelo: string;
    protected motor: IMotor; // Composição: associação flexível

    constructor(modelo: string, motor: IMotor) {
        this.modelo = modelo;
        this.motor = motor;
    }

    darPartida(): void {
        console.log(`\nIniciando viagem no ${this.modelo} (${this.motor.getTipo()}):`);
        this.motor.ligar();
    }

    acelerar(potencia: number): void {
        this.motor.acelerar(potencia);
    }

    parar(): void {
        this.motor.desligar();
    }
}

// Subclasse: Utiliza HERANÇA (CarroEletrico É UM Carro)
class CarroEletrico extends Carro {
    private capacidadeBateriaKwh: number;
    private cargaAtualPercent: number;

    constructor(modelo: string, potenciaKw: number, capacidadeBateriaKwh: number) {
        // Invocando super() passando o motor elétrico (Composição dentro da Herança)
        super(modelo, new MotorEletrico(potenciaKw));
        this.capacidadeBateriaKwh = capacidadeBateriaKwh;
        this.cargaAtualPercent = 100;
    }

    // Sobrescrita (Override) adicionando checagem de bateria
    darPartida(): void {
        if (this.cargaAtualPercent <= 0) {
            console.log(`[Bateria Descarregada] O ${this.modelo} não pode ligar sem carga.`);
            return;
        }
        super.darPartida(); // Reaproveita a partida padrão da classe pai Carro
        console.log(`[Painel Digital] Bateria: ${this.cargaAtualPercent}% (${this.capacidadeBateriaKwh} kWh).`);
    }

    ativarModoRegenerativo(): void {
        console.log(`[Regeneração] Freios recuperando energia cinética para a bateria.`);
        this.cargaAtualPercent = Math.min(100, this.cargaAtualPercent + 5);
    }
}

// ==========================================
// 3. DEMONSTRAÇÃO PRÁTICA
// ==========================================
console.log("=== Exemplo 11: Herança vs. Composição ===");

// Caso A: Carro a Combustão usando Composição pura
// O Carro NÃO herda de Motor; ele RECEBE o motor apropriado.
const fusca = new Carro("VW Fusca", new MotorCombustao(1.6));
fusca.darPartida();
fusca.acelerar(50);
fusca.parar();

// Caso B: Carro Elétrico usando Herança (É UM Carro) + Composição
const tesla = new CarroEletrico("Tesla Model 3", 211, 75);
tesla.darPartida();
tesla.acelerar(80);
tesla.ativarModoRegenerativo();
tesla.parar();

export {};
