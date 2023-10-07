import { GerenciamentoTarefaStorageService } from './../../service/gerenciamento-tarefa.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Tarefa } from '../../api/models/tarefa.interface';

@Component({
    selector: 'app-adicionar',
    templateUrl: './adicionar.component.html',
    styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

    public formGerenciamentoTarefa: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private gerenciamentoTarefaStorageService: GerenciamentoTarefaStorageService
    ) { }

    ngOnInit() {
        this.criarFormGerenciamentoTarefa();
    }

    public criarFormGerenciamentoTarefa(): void {
        this.formGerenciamentoTarefa = this.formBuilder.group({
            descricao: [null],
            vencimento: [null],
        });
    }

    public resetarFormulario(): void {
        this.formGerenciamentoTarefa.reset();
    }

    public adicionarTarefa(): void {
        let descricaoTarefa = (this.formGerenciamentoTarefa.get('descricao')?.value);
        let vencimentoTarefa = (this.formGerenciamentoTarefa.get('vencimento')?.value);
        // this.gerenciamentoTarefaStorageService.addTarefa('tarefa', new Tarefa(descricaoTarefa, vencimentoTarefa));
    }

}
