import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environments } from '../../../environments/environment';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-categoria.component.html',
  styleUrl: './editar-categoria.component.css'
})
export class EditarCategoriaComponent {

  id: number = 0;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.httpClient.get(environments.apiCategorias + "/" + id).subscribe({
      next: (data: any) => {
        this.id = data.id
        this.form.controls.nome.setValue(data.nome)
      }
    })
  }

  onSubmit() {
    this.httpClient.put(environments.apiCategorias + "/" + this.id, this.form.value, { responseType: 'text' }).subscribe({
      next: (data) => {
        alert(data);
      }
    })
  }
}
