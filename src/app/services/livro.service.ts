import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  cadastrar(livro: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, livro);
  }

  inativar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/inativar/${id}`);
  }

  getEstatisticas() {
  return this.http.get<any>('http://localhost:8080/livros/estatisticas');
}

emprestar(livroId: number, usuarioId: number) {
  return this.http.post(
    `http://localhost:8080/livros/emprestar/${livroId}?usuarioId=${usuarioId}`,
    {},
    { responseType: 'text' }
  );
}

devolver(livroId: number) {
  return this.http.post(
    `http://localhost:8080/livros/devolver/${livroId}`,
    {},
    { responseType: 'text' }
  );
}

}