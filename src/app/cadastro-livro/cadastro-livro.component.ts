import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent {

  imagemSelecionada!: File;

  novoLivro = {
    nome: '',
    autor: '',
    isbn: '',
    quantidade: 0
  };

  constructor(
    private livroService: LivroService,
    private router: Router
  ) {}

  selecionarImagem(event: any) {
    this.imagemSelecionada = event.target.files[0];
  }

  cadastrar() {

    const formData = new FormData();

    formData.append('nome', this.novoLivro.nome);
    formData.append('autor', this.novoLivro.autor);
    formData.append('isbn', this.novoLivro.isbn);
    formData.append('quantidade', this.novoLivro.quantidade.toString());
    formData.append('imagem', this.imagemSelecionada);

    this.livroService.cadastrar(formData).subscribe(() => {

      alert("Livro cadastrado com sucesso ");

      this.router.navigate(['/']);

    });

  }

}