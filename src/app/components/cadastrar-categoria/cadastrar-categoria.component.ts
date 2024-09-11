import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environments } from '../../../environments/environment';

@Component({
  selector: 'app-cadastrar-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})

export class CadastrarCategoriaComponent {

  constructor(private httpClient: HttpClient) { }

  form = new FormGroup({
    nome: new FormControl('', [Validators.required,
    Validators.minLength(6)])
  })

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    const nome = this.form.value.nome;
    this.httpClient.post(environments.apiCategorias, this.form.value, { responseType: 'text' }).subscribe({
      next: (data) => {
        alert(data);
        this.form.reset();
      }
    })
  }
}
