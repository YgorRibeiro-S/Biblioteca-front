import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: ''
  };

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.buscarPorId(this.id)
      .subscribe((dados) => {

        this.usuario.nome = dados.nome;
        this.usuario.email = dados.email;
      });
  }

  atualizar(): void {

    this.usuarioService.atualizar(this.id, this.usuario)
      .subscribe(() => {

        alert('Usuário atualizado com sucesso!');

        this.router.navigate(['/usuarios']);
      });
  }
}