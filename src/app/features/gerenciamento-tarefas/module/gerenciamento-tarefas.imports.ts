import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { GerenciamentoTarefasRoutingModule } from "../router/gerenciamento-tarefas.routing.module";
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

export const GERENCIAMENTO_TAREFAS_IMPORTS: any[] = [
    CommonModule,
    GerenciamentoTarefasRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //ANGULAR MATERIAL
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
]