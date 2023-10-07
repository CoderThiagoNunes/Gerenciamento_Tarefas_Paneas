import { Injectable } from '@angular/core';
import { Tarefa } from '../api/models/tarefa.interface';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GerenciamentoTarefaStorageService {

    constructor() {}

    public getListaTarefas(): Observable<Tarefa[]> {
        return of<Tarefa[]>(JSON.parse(localStorage.getItem('tarefa') as string)as Tarefa[]).pipe(
            delay(2000),
            tap(res => console.log(res))
        )
    }

    public setListaTarefas(tarefas: Tarefa[]) {
        localStorage.setItem('tarefa', JSON.stringify(tarefas));
    }

    public addTarefa(tarefa: Tarefa): void {
        // let listaTarefas: Tarefa[] = this.getListaTarefas('tarefa');
        // listaTarefas.push(tarefa);
        // this.setListaTarefas('tarefa', listaTarefas);
    }

    // public updateTarefa(tarefa: Tarefa, changes: any): void {
    //     const index = this.listaTarefas.indexOf(tarefa);
    //     this.listaTarefas[index] = { ...tarefa, ...changes };
    //     this.setListaTarefas('tarefa', this.listaTarefas);
    // }

    public deleteTarefa(index: number): void {
        // let listaTarefas: Tarefa[] = this.getListaTarefas('tarefa');
        // listaTarefas.splice(index, 1);
        // this.setListaTarefas('tarefa', listaTarefas);
    }

}
