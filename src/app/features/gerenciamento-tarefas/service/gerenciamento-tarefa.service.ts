import { Injectable } from '@angular/core';

import { Tarefa } from '../api/models/tarefa.interface';
import { BehaviorSubject } from 'rxjs';

export interface State {
    listaTarefas$: BehaviorSubject<Tarefa[]>;
}

const inicialState: State = {
    listaTarefas$: new BehaviorSubject<Tarefa[]>([])
};

@Injectable({
    providedIn: 'root'
})
export class GerenciamentoTarefaStorageService {

    private readonly subject = new BehaviorSubject<State>(inicialState);

    constructor() {
        if(localStorage.getItem('tarefa')) {
            inicialState.listaTarefas$.next(JSON.parse(localStorage.getItem('tarefa') as string))
        }
    }

    get storeValue(): State {
        return this.subject.value;
    }

    public addTarefa(novaTarefa: Tarefa): void {
        const state = this.storeValue.listaTarefas$.value;
        state.push(novaTarefa);
        this.setListaTarefas(state);
    }

    public updateTarefa(tarefa: Tarefa, index: number): void {
        const state = this.storeValue.listaTarefas$.value;
        state[index].descricao = tarefa.descricao;
        state[index].dataVencimento = tarefa.dataVencimento;
        this.setListaTarefas(state);
    }

    public deleteTarefa(index: number): void {
        const state = this.storeValue.listaTarefas$.value;
        state.splice(index, 1);
        this.setListaTarefas(state);
    }

    public alterarStatusTarefa(index: number): void {
        const state = this.storeValue.listaTarefas$.value;
        state[index].finalizada = !state[index].finalizada;
        this.setListaTarefas(state);
    }
    
    public setListaTarefas(tarefas: Tarefa[]): void {
        const state = this.storeValue.listaTarefas$;
        state.next(tarefas);
        localStorage.setItem('tarefa', JSON.stringify(tarefas));
        console.log(state.value)
    }
}
