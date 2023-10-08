import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, takeUntil, tap } from 'rxjs';
import { GerenciamentoTarefaStorageService } from '../../service/gerenciamento-tarefa.service';
import { Tarefa } from '../../api/models/tarefa.interface';
import * as moment from 'moment';

@Component({
    selector: 'app-editar',
    templateUrl: './editar.component.html',
    styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit, OnDestroy {

    public destroySubject$ = new Subject<any>();
    public idTarefa: number;
    public formGerenciamentoTarefa: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private gerenciamentoTarefaStorageService: GerenciamentoTarefaStorageService
    ) {}

    ngOnInit(): void {
        this.capturarIdLista();
    }

    ngOnDestroy(): void {
        if(!this.destroySubject$.closed) {
            this.destroySubject$.next(true);
            this.destroySubject$.complete();
        }
    }
    
    public capturarIdLista() {
        this.route.params.pipe(
            tap(param => {
                this.idTarefa = Number(param['id']);
                this.criarFormGerenciamentoTarefa(this.idTarefa);
            }),
            takeUntil(this.destroySubject$) // Faz a desinscriçao do Observable para evitar memory leak...
        ).subscribe()
    }

    public criarFormGerenciamentoTarefa(idTarefa: number): void {
        let descricaoValue: string = this.gerenciamentoTarefaStorageService.storeValue.listaTarefas$.value[idTarefa].descricao;
        let vencimentoStringValue: string | Date = this.gerenciamentoTarefaStorageService.storeValue.listaTarefas$.value[idTarefa].dataVencimento;
        let vencimentoValue: Date = moment(vencimentoStringValue, "DD/MM/YYYY").toDate();

        this.formGerenciamentoTarefa = this.formBuilder.group({
            descricao: [descricaoValue, [Validators.required]],
            vencimento: [vencimentoValue, [Validators.required]],
        });
    }

    public irParaAdicionarTarefa(): void {
        this.router.navigate([`/gerenciamento-tarefas/adicionar`]);
    }

    public resetarFormulario(): void {
        this.formGerenciamentoTarefa.reset();
    }

    public updateTarefa(): void {
        let descricaoTarefa = (this.formGerenciamentoTarefa.get('descricao')?.value);
        let vencimentoTarefa = moment((this.formGerenciamentoTarefa.get('vencimento')?.value)).format('DD/MM/YYYY');
        let statusTarefa: boolean = false;
        this.gerenciamentoTarefaStorageService.updateTarefa(new Tarefa(descricaoTarefa, vencimentoTarefa, statusTarefa), this.idTarefa);
        this.resetarFormulario();
        this.irParaAdicionarTarefa();
    }

}
