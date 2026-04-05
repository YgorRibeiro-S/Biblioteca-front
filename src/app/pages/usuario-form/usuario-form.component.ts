import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent {

  usuario: Usuario = {
    nome: '',
    email: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  salvar() {
    this.usuarioService.cadastrar(this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }
}