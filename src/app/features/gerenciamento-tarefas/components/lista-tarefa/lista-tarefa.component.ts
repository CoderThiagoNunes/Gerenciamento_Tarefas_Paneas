import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../api/models/tarefa.interface';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: ['./lista-tarefa.component.scss']
})
export class ListaTarefaComponent implements OnInit {

  public displayedColumns: string[] = ['descricao', 'dataVencimento'];
  public dataSource: Tarefa[] = [
    {id: 1, descricao: 'Fazer compra mercado', dataVencimento: "04/12/2023"},
    {id: 2, descricao: 'Pagar conta de Luz', dataVencimento: "04/12/2023"},
    {id: 3, descricao: 'Andar com o cachorro no Parque', dataVencimento:"04/12/2023"},
    {id: 4, descricao: 'Desenvolver aplicação', dataVencimento: "04/12/2023"},
    {id: 5, descricao: 'Jogar com amigos', dataVencimento: "04/12/2023"},
    {id: 6, descricao: 'Sair com a esposa para Jantar', dataVencimento: "04/12/2023"},
    {id: 7, descricao: 'Pagar conta de Gás', dataVencimento: "04/12/2023"},
    {id: 8, descricao: 'Buscar família no aeroporto', dataVencimento:"04/12/2023"},
    {id: 9, descricao: 'Levar carro para lavar', dataVencimento: "04/12/2023"},
    {id: 10, descricao: 'Ver série do Netflix', dataVencimento: "04/12/2023"},
    {id: 11, descricao: 'Lavar as roupas', dataVencimento:"04/12/2023"},
  ];

  constructor() {}

  ngOnInit() {
    window.localStorage.setItem('dataSource', JSON.stringify(this.dataSource));
  }

}
