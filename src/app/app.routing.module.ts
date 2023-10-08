import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/gerenciamento-tarefas/adicionar', pathMatch: 'full' },
    { path: 'gerenciamento-tarefas', redirectTo: '/gerenciamento-tarefas/adicionar', pathMatch: 'full' },
    {
        path: 'gerenciamento-tarefas',
        loadChildren: async () => (await import('./features/gerenciamento-tarefas/module/gerenciamento-tarefas.module')).GerenciamentoTarefasModule
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
