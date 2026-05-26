import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros-status',
  templateUrl: './livros-status.component.html',
  styleUrls: ['./livros-status.component.css']
})
export class LivrosStatusComponent implements OnInit {

  livrosAtivos: any[] = [];
  livrosInativos: any[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.carregarAtivos();
    this.carregarInativos();
  }

  carregarAtivos() {
    this.livroService.listar().subscribe(data => {
      this.livrosAtivos = data;
    });
  }

  carregarInativos() {
    this.livroService.livrosInativos().subscribe(data => {
      this.livrosInativos = data;
    });
  }

  inativarLivro(id: number) {

  this.livroService.inativar(id).subscribe(() => {

    alert("Livro inativado com sucesso!");

    this.carregarAtivos();
    this.carregarInativos();

  });

}

ativarLivro(id: number) {

  this.livroService.ativar(id).subscribe(() => {

    alert("Livro ativado com sucesso!");

    this.carregarAtivos();
    this.carregarInativos();

  });

}

}