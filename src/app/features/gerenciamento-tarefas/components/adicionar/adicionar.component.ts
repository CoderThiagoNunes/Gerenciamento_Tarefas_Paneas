import { GerenciamentoTarefaStorageService } from './../../service/gerenciamento-tarefa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from '../../api/models/tarefa.interface';
import * as moment from 'moment';

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
            descricao: [null, [Validators.required]],
            vencimento: [null, [Validators.required]],
        });
    }

    public resetarFormulario(): void {
        this.formGerenciamentoTarefa.reset();
    }

    public adicionarTarefa(): void {
        let descricaoTarefa = (this.formGerenciamentoTarefa.get('descricao')?.value);
        let vencimentoTarefa = moment((this.formGerenciamentoTarefa.get('vencimento')?.value)).format('DD/MM/YYYY');
        let statusTarefa: boolean = false;
        this.gerenciamentoTarefaStorageService.addTarefa(new Tarefa(descricaoTarefa, vencimentoTarefa, statusTarefa));
        this.resetarFormulario();
    }

}
