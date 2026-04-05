import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosComponent } from './components/livros/livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';

import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';

const routes: Routes = [
  { path: '', component: LivrosComponent },

  { path: 'cadastro', component: CadastroLivroComponent },

  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/cadastro', component: UsuarioFormComponent },
  { path: 'usuarios/editar/:id', component: UsuarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }