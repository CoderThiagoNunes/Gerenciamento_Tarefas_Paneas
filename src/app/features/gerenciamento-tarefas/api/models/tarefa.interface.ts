export class Tarefa {
    descricao: string;
    dataVencimento: Date | string;
    finalizada: boolean;

    constructor(descricao: string, dataVencimento: Date | string, finalizada: boolean) {
        this.descricao = descricao;
        this.dataVencimento = dataVencimento;
        this.finalizada = finalizada;
    }
}