import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environments } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultar-categorias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultar-categorias.component.html',
  styleUrl: './consultar-categorias.component.css'
})
export class ConsultarCategoriasComponent {

  categorias: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(environments.apiCategorias).subscribe({
      next: (data) => {
        this.categorias = data as any[];
      }
    })
  }

  onDelete(id: number) {
    if (confirm('Deseja realmente excluir a categoria selecionada?')) {
      this.httpClient.delete(environments.apiCategorias + "/" + id,
        { responseType: 'text' })
        .subscribe({
          next: (data) => {
            alert(data);
            this.ngOnInit();
          }
        })
    }
  }

}
