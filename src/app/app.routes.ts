import { Routes } from '@angular/router';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { ConsultarCategoriasComponent } from './components/consultar-categorias/consultar-categorias.component';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';
import { EditarTarefaComponent } from './components/editar-tarefa/editar-tarefa.component';
import { ConsultarTarefasComponent } from './components/consultar-tarefas/consultar-tarefas.component';
import { CadastrarTarefaComponent } from './components/cadastrar-tarefa/cadastrar-tarefa.component';

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
        path: 'pages/editar-categoria/:id',
        component: EditarCategoriaComponent
    },
    {
        path : 'pages/cadastrar-tarefa',
        component: CadastrarTarefaComponent
    },
    {
        path : 'pages/consultar-tarefas',
        component: ConsultarTarefasComponent
    },
    {
        path : 'pages/editar-tarefa/:id',
        component: EditarTarefaComponent   
    }

];
