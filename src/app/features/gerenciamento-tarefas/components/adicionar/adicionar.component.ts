import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  public formGerenciamentoTarefa: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.criarFormGerenciamentoTarefa();
  }

  public criarFormGerenciamentoTarefa(): void {
    this.formGerenciamentoTarefa = this.formBuilder.group({
      tarefa: [null],
      vencimento: [null],
    });
  }

  public resetarFormulario(): void {
    this.formGerenciamentoTarefa.reset();
  }

}
