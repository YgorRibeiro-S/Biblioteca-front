import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: any[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.livroService.listar().subscribe(dados => {
      this.livros = dados;
    });
  }

  inativarLivro(id: number) {
    if(confirm("Tem certeza que deseja inativar esse livro?")){
      this.livroService.inativar(id).subscribe(() => {
        alert("Livro inativado com sucesso!");

        this.listar();
      });
    }
  }

}