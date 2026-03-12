import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosComponent } from './components/livros/livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';

const routes: Routes = [
  { path: '', component: LivrosComponent },
  { path: 'cadastro', component: CadastroLivroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }