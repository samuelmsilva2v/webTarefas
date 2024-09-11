import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastrar-categoria.component.html',
  styleUrl: './cadastrar-categoria.component.css'
})
export class CadastrarCategoriaComponent {

  constructor(private httpClient: HttpClient) { }

  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.httpClient
      .post('http://localhost:8080/api/categorias?nome='
        + this.form.value.nome, {}, {
        responseType: 'text'
      }).subscribe({
        next: (data) => {
          alert(data);
          this.form.reset();
        }
      })
  }

}
