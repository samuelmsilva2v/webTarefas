import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environments } from '../../../environments/environment';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.css'
})
export class CadastrarTarefaComponent {

  categorias: any[] = [];

  constructor(private httpClient: HttpClient) { }

  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
    data: new FormControl('', [Validators.required]), 
    descricao: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(250)]),
    categoriaId: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }


  ngOnInit() {
    this.httpClient.get(environments.apiCategorias).subscribe({
      next: (data) => {
        this.categorias = data as any[];
      }
    })
  }

  onSubmit() {
    this.httpClient.post(environments.apiTarefas, this.form.value, { responseType: 'text' }).subscribe({
      next: (data) => {
        alert(data);
        this.form.reset();
      }
    })
  }
}
