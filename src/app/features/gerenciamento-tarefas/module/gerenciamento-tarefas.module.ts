import { NgModule } from '@angular/core';
import { GERENCIAMENTO_TAREFAS_COMPONENTS } from './gerenciamento-tarefas.components';
import { GERENCIAMENTO_TAREFAS_EXPORTS } from './gerenciamento-tarefas.exports';
import { GERENCIAMENTO_TAREFAS_IMPORTS } from './gerenciamento-tarefas.imports';
import { GERENCIAMENTO_TAREFAS_PAGES } from './gerenciamento-tarefas.pages';
import { GERENCIAMENTO_TAREFAS_PIPES } from './gerenciamento-tarefas.pipes';
import { GERENCIAMENTO_TAREFAS_PROVIDERS } from './gerenciamento-tarefas.providers';

@NgModule({
  declarations: [...GERENCIAMENTO_TAREFAS_PAGES, ...GERENCIAMENTO_TAREFAS_COMPONENTS, ...GERENCIAMENTO_TAREFAS_PIPES],
  imports: [...GERENCIAMENTO_TAREFAS_IMPORTS],
  exports: [...GERENCIAMENTO_TAREFAS_EXPORTS],
  providers:[...GERENCIAMENTO_TAREFAS_PROVIDERS]
})
export class GerenciamentoTarefasModule { }