/**
 * Aula 7 - Herança em Programação Orientada a Objetos com TypeScript
 * Exemplo 10: Sistema Polimórfico de Notificações (Caso de Uso Real)
 *
 * Cenário Prático:
 * Um sistema empresarial precisa enviar alertas aos usuários por diferentes canais:
 * E-mail, SMS e Notificação Push no celular.
 *
 * Aplicação dos conceitos de Herança:
 * - Superclasse: Centraliza destinatário, mensagem, data/hora e status.
 * - Subclasses: Implementam o envio específico de acordo com as regras de cada canal
 *   (validação de número/e-mail, limites de caracteres, tokens de dispositivo).
 * - Polimorfismo: Uma lista mista de notificações pode ser processada uniformemente.
 */

abstract class Notificacao {
    protected destinatario: string;
    protected mensagem: string;
    protected dataEnvio: Date;
    protected enviada: boolean = false;

    constructor(destinatario: string, mensagem: string) {
        this.destinatario = destinatario;
        this.mensagem = mensagem;
        this.dataEnvio = new Date();
    }

    // Método abstrato: cada canal implementa sua própria lógica de envio
    abstract enviar(): boolean;

    // Método concreto compartilhado (reaproveitamento da superclasse)
    protected formatarLog(canal: string): string {
        return `[${canal}] [${this.dataEnvio.toLocaleTimeString()}] Para: ${this.destinatario} | Msg: "${this.mensagem}"`;
    }

    public isEnviada(): boolean {
        return this.enviada;
    }
}

// Canal 1: Notificação por E-mail
class NotificacaoEmail extends Notificacao {
    private assunto: string;

    constructor(emailDestinatario: string, assunto: string, mensagem: string) {
        super(emailDestinatario, mensagem);
        this.assunto = assunto;
    }

    enviar(): boolean {
        // Validação simples de formato de e-mail
        if (!this.destinatario.includes("@")) {
            console.log(`[E-mail Falhou] Endereço inválido: ${this.destinatario}`);
            return false;
        }

        console.log(this.formatarLog("E-MAIL"));
        console.log(`         -> Assunto: "${this.assunto}"`);
        console.log(`         -> Servidor SMTP: Enviado com sucesso via TLS.`);
        this.enviada = true;
        return true;
    }
}

// Canal 2: Notificação por SMS
class NotificacaoSMS extends Notificacao {
    private static readonly LIMITE_CARACTERES = 160;

    constructor(telefoneDestinatario: string, mensagem: string) {
        super(telefoneDestinatario, mensagem);
    }

    enviar(): boolean {
        if (this.mensagem.length > NotificacaoSMS.LIMITE_CARACTERES) {
            console.log(`[SMS Falhou] Mensagem excede ${NotificacaoSMS.LIMITE_CARACTERES} caracteres.`);
            return false;
        }

        console.log(this.formatarLog("SMS"));
        console.log(`         -> Gateway de Telefonia: SMS transmitido via operadora celular.`);
        this.enviada = true;
        return true;
    }
}

// Canal 3: Notificação Push (Aplicativo Mobile)
class NotificacaoPush extends Notificacao {
    private tokenDispositivo: string;
    private somAtivado: boolean;

    constructor(usuarioId: string, mensagem: string, tokenDispositivo: string, somAtivado: boolean = true) {
        super(usuarioId, mensagem);
        this.tokenDispositivo = tokenDispositivo;
        this.somAtivado = somAtivado;
    }

    enviar(): boolean {
        console.log(this.formatarLog("PUSH APP"));
        console.log(`         -> Firebase Cloud Messaging (FCM): Token ${this.tokenDispositivo.substring(0, 10)}... | Som: ${this.somAtivado ? "ON" : "OFF"}`);
        this.enviada = true;
        return true;
    }
}

// --- Classe Gerenciadora (Disparador Polimórfico) ---
class CentralDeNotificacoes {
    private fila: Notificacao[] = [];

    agendar(notificacao: Notificacao): void {
        this.fila.push(notificacao);
    }

    dispararTodas(): void {
        console.log(`\nIniciando disparo em lote de ${this.fila.length} notificações...`);
        let sucessos = 0;

        for (const notif of this.fila) {
            // Chamada polimórfica: cada objeto executa seu próprio método enviar()!
            const resultado = notif.enviar();
            if (resultado) sucessos++;
            console.log("------------------------------------------------------------");
        }

        console.log(`Disparo finalizado: ${sucessos}/${this.fila.length} enviadas com sucesso.`);
    }
}

// --- Demonstração Prática ---
console.log("=== Exemplo 10: Sistema Polimórfico de Notificações ===");

const central = new CentralDeNotificacoes();

// Agendando diferentes tipos de notificações na mesma fila polimórfica
central.agendar(new NotificacaoEmail(
    "aluno@ifpi.edu.br",
    "Notas da Atividade 4 Publicadas",
    "Prezado aluno, as notas foram lançadas no sistema acadêmico."
));

central.agendar(new NotificacaoSMS(
    "+5589999998888",
    "IFPI Informa: Amanhã não haverá aula de POO devido ao feriado."
));

central.agendar(new NotificacaoPush(
    "user_10293",
    "Você recebeu um novo feedback do professor!",
    "fcm_tok_99182371928371928",
    true
));

// Disparo uniforme de todos os canais
central.dispararTodas();

export {};
