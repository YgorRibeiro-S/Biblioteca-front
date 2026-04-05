import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: any[] = [];

   estatisticas: any;

   usuarioSelecionadoId: number = 1;

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.listar();
    this.carregarLivros();
  }

  mostrarEstatisticas: boolean = false;

  listar() {
    this.livroService.listar().subscribe(dados => {
      this.livros = dados;
    });
  }

  toggleEstatisticas() {
  this.mostrarEstatisticas = !this.mostrarEstatisticas;

 
  if (this.mostrarEstatisticas) {
    this.carregarEstatisticas();
  }
}

   carregarEstatisticas() {
    this.livroService.getEstatisticas().subscribe({
      next: (res) => {
        this.estatisticas = res;
      },
      error: (err) => {
        console.error('Erro ao carregar estatísticas', err);
      }
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

  carregarLivros() {
  this.livroService.listar().subscribe(dados => {
    this.livros = dados;
  });
}

  emprestarLivro(livroId: number) {
  this.livroService.emprestar(livroId, this.usuarioSelecionadoId)
    .subscribe(res => {
      alert(res);
      this.carregarLivros();
    });
}

devolverLivro(livroId: number) {
  this.livroService.devolver(livroId)
    .subscribe(res => {
      alert(res);
      this.carregarLivros();
    });
}

}