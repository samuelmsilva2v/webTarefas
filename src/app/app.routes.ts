import { Routes } from '@angular/router';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { ConsultarCategoriasComponent } from './components/consultar-categorias/consultar-categorias.component';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';

export const routes: Routes = [
    {
        path: 'pages/cadastrar-categoria',
        component: CadastrarCategoriaComponent
    },
    {
        path: 'pages/consultar-categorias',
        component: ConsultarCategoriasComponent
    },
    {
        path: 'pages/editar-categoria',
        component: EditarCategoriaComponent
    }
];
