import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdicionarComponent } from '../components/adicionar/adicionar.component';
import { EditarComponent } from '../components/editar/editar.component';
import { GerenciamentoTarefasPage } from '../gerenciamento-tarefas.page';

const gerenciamentoTarefasRoutes: Routes = [
    {
        path: '',
        component: GerenciamentoTarefasPage,
        children: [
            { path: 'adicionar', component: AdicionarComponent },
            { path: 'editar/:id', component: EditarComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(gerenciamentoTarefasRoutes)],
    exports: [RouterModule]
})
export class GerenciamentoTarefasRoutingModule { }