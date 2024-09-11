import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environments } from '../../../environments/environment';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.css'
})
export class CadastrarTarefaComponent {

  categorias: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(environments.apiCategorias).subscribe({
      next: (data) => {
        this.categorias = data as any[];
      }
    })
  }
}
