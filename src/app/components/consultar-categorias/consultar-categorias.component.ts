import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar-categorias.component.html',
  styleUrl: './consultar-categorias.component.css'
})
export class ConsultarCategoriasComponent {

  categorias: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/api/categorias').subscribe({
      next: (data) => {
        this.categorias = data as any[];
      }
    })
  }
}
