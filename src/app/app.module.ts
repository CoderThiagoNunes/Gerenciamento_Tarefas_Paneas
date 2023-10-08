import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GerenciamentoTarefasModule } from './features/gerenciamento-tarefas/module/gerenciamento-tarefas.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        GerenciamentoTarefasModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
