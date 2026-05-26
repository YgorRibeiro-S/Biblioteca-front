import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './components/livros/livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';
import { EstatisticasComponent } from './pages/estatisticas/estatisticas.component';
import { LivrosStatusComponent } from './pages/livros-status/livros-status.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    CadastroLivroComponent,
    UsuariosComponent,
    UsuarioFormComponent,
    EstatisticasComponent,
    LivrosStatusComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
