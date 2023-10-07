export class Tarefa {
    descricao: string;
    dataVencimento: Date | string;

    constructor(descricao: string, dataVencimento: Date | string) {
        this.descricao = descricao;
        this.dataVencimento = dataVencimento;
    }
}