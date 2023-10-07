import { Component, OnInit, ViewChild } from '@angular/core';

import { Tarefa } from '../../api/models/tarefa.interface';
import { GerenciamentoTarefaStorageService } from '../../service/gerenciamento-tarefa.service';
import { Observable } from 'rxjs';

const ELEMENT_DATA: Tarefa[] = [
    { descricao: 'Fazer compra mercado', dataVencimento: '04/12/2023' },
    { descricao: 'Pagar conta de Luz', dataVencimento: '04/12/2023' },
    { descricao: 'Andar com o cachorro no Parque', dataVencimento: '04/12/2023' },
    { descricao: 'Desenvolver aplicação', dataVencimento: '04/12/2023' },
    { descricao: 'Jogar com amigos', dataVencimento: '04/12/2023' },
    { descricao: 'Sair com a esposa para Jantar', dataVencimento: '04/12/2023' },
    { descricao: 'Pagar conta de Gás', dataVencimento: '04/12/2023' },
    { descricao: 'Buscar família no aeroporto', dataVencimento: '04/12/2023' },
    { descricao: 'Levar carro para lavar', dataVencimento: '04/12/2023' },
    { descricao: 'Ver série do Netflix', dataVencimento: '04/12/2023' },
    { descricao: 'Lavar as roupas', dataVencimento: '04/12/2023' },
];

@Component({
    selector: 'app-lista-tarefa',
    templateUrl: './lista-tarefa.component.html',
    styleUrls: ['./lista-tarefa.component.scss']
})
export class ListaTarefaComponent implements OnInit {

    public displayedColumns: string[] = ['descricao', 'dataVencimento', 'editar', 'deletar'];
    public listaTarefas: Tarefa[];
    public listaTarefas$: Observable<Tarefa[]>;


    constructor(
        public gerenciamentoTarefaStorageService: GerenciamentoTarefaStorageService
    ) {}

    ngOnInit() {
        this.gerenciamentoTarefaStorageService.setListaTarefas(ELEMENT_DATA);
        this.listaTarefas$ = this.gerenciamentoTarefaStorageService.getListaTarefas();
        this.listaTarefas$.subscribe(res => {
            console.log(res)
        })
        // this.gerenciamentoTarefaStorageService.getListaTarefas('tarefa').subscribe(res => {
        //     this.listaTarefas = res;
        //     console.log(this.listaTarefas)
        // });
    }

    public excluirTarefa(index: number): void {
        this.gerenciamentoTarefaStorageService.deleteTarefa(index);
    }

    // /** Whether the number of selected elements matches the total number of rows. */
    // isAllSelected() {
    //     const numSelected = this.selection.selected.length;
    //     const numRows = this.tarefas.data.length;
    //     return numSelected === numRows;
    // }

    // /** Selects all rows if they are not all selected; otherwise clear selection. */
    // masterToggle() {
    //     if (this.isAllSelected()) {
    //         this.selection.clear();
    //         return;
    //     }

    //     this.selection.select(...this.tarefas.data);
    // }

    // /** The label for the checkbox on the passed row */
    // checkboxLabel(row?: Tarefa): string {
    //     if (!row) {
    //         return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    //     }
    //     return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    // }

}
