import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosComponent } from './components/livros/livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';

import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';

import { EstatisticasComponent } from './pages/estatisticas/estatisticas.component';
import { LivrosStatusComponent } from './pages/livros-status/livros-status.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', component: LivrosComponent },

  { path: 'cadastro', component: CadastroLivroComponent },

  { path: 'usuarios/cadastro', component: UsuarioFormComponent },
  { path: 'usuarios/editar/:id', component: UsuarioFormComponent },
  { path: 'usuarios', component: UsuariosComponent },

  { path: 'estatisticas',component: EstatisticasComponent},

  {path: 'livros/status',component: LivrosStatusComponent},

  {path: 'usuarios/editar/:id',component: EditarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }