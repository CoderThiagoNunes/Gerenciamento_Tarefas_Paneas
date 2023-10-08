import { Component, OnInit, ViewChild } from '@angular/core';

import { Tarefa } from '../../api/models/tarefa.interface';
import { GerenciamentoTarefaStorageService } from '../../service/gerenciamento-tarefa.service';
import { Observable, delay } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lista-tarefa',
    templateUrl: './lista-tarefa.component.html',
    styleUrls: ['./lista-tarefa.component.scss'],
})
export class ListaTarefaComponent implements OnInit {

    public displayedColumns: string[] = ['concluir', 'descricao', 'dataVencimento', 'editar', 'deletar'];
    public listaTarefas$: Observable<Tarefa[]>;

    constructor(
        public gerenciamentoTarefaStorageService: GerenciamentoTarefaStorageService,
        private router: Router
    ) {}

    ngOnInit() {
        //setTimeout utilizado para simular um delay apenas na primeira chamada do componente...
        setTimeout(() => {
            this.iniciarListaTarefas();
        }, 1000);
    }
    
    public iniciarListaTarefas(): void {
        this.listaTarefas$ = this.gerenciamentoTarefaStorageService.storeValue.listaTarefas$.asObservable()
    }

    public irParaEditarTarefa(index: number): void {
        this.router.navigate([`/gerenciamento-tarefas/editar/${index}`]);
    }

    public irParaAdicionarTarefa(): void {
        this.router.navigate([`/gerenciamento-tarefas/adicionar`]);
    }

    public excluirTarefa(index: number): void {
        this.gerenciamentoTarefaStorageService.deleteTarefa(index);
        this.irParaAdicionarTarefa();
    }

    public concluirTarefa(index: number): void {
        this.gerenciamentoTarefaStorageService.concluirTarefa(index);
    }
}
