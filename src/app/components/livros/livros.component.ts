import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { EmprestimoService } from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: any[] = [];
   
  estatisticas: any;

   usuarioSelecionadoId: number = 1;

 constructor(
  private livroService: LivroService,
  private emprestimoService: EmprestimoService
) {}

  ngOnInit(): void {
  this.listar();
}

listar() {
  this.livroService.listar().subscribe(dados => {
    this.livros = dados;
  });
}

  mostrarEstatisticas: boolean = false;

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
  if(confirm("Tem certeza que deseja inativar esse livro?")) {
    this.livroService.inativar(id).subscribe(() => {
      alert("Livro inativado com sucesso!");

      this.listar();

    });

  }
}

  emprestarLivro(livroId: number) {
  this.emprestimoService.emprestar(livroId, this.usuarioSelecionadoId)
    .subscribe(res => {
      alert(res);
     this.listar();
    });
}

devolverLivro(livroId: number) {
 this.emprestimoService.devolver(livroId)
    .subscribe(res => {
      alert(res);
     this.listar();
    });
}

}