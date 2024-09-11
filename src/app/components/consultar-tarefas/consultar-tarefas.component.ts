import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environments } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './consultar-tarefas.component.html',
  styleUrl: './consultar-tarefas.component.css'
})
export class ConsultarTarefasComponent {
  
  tarefas: any[] = [];

  constructor(private httpClient : HttpClient) { }

  form = new FormGroup({
    dataMin : new FormControl('', [Validators.required]),
    dataMax : new FormControl('', [Validators.required])
  })

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.httpClient.get(environments.apiTarefas + "/" + this.form.value.dataMin + "/" + this.form.value.dataMax).subscribe({
      next: (data) => {
        this.tarefas = data as any[];
      }
    })
  }
}
